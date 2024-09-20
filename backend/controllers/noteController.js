// controllers/noteController.js
const Note = require('../models/note');

exports.getNotes = async (req, res) => {
  const notes = await Note.findAll();
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const newNote = await Note.create({ title, content });
  res.json(newNote);
};

exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = await Note.findByPk(id);
  if (note) {
    await note.update({ title, content });
    res.json(note);
  } else {
    res.status(404).json({ error: "Note not found" });
  }
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findByPk(id);
  if (note) {
    await note.destroy();
    res.json({ message: 'Note deleted successfully' });
  } else {
    res.status(404).json({ error: "Note not found" });
  }
};
