const express = require('express');
const Note = require('../models/note');
const router = express.Router();

// GET /notes - Retrieve all notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving notes.' });
  }
});

// POST /notes - Create a new note
router.post('/notes', async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  try {
    const newNote = await Note.create({ title, content });
    res.json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the note.' });
  }
});

// PUT /notes/:id - Update a note by ID
router.put('/notes/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }

    note.title = title || note.title;
    note.content = content || note.content;
    await note.save();

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the note.' });
  }
});

// DELETE /notes/:id - Delete a note by ID
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }

    await note.destroy();
    res.json({ message: 'Note deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the note.' });
  }
});

module.exports = router;
