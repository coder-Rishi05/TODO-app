import Note from "../models/Notes.js";

export const getAllNotes = async (req, res) => {
  // send the notes written in the database.
  try {
    const notes = await Note.find().sort({ createdAT: -1 });

    res.status(200).json(notes);
    // res.status(200).send("You fetched the notes.");
  } catch (error) {
    console.log("error in getting data controller ", error);
    res.status(500).json("internal server error", error);
  }
};

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).message("Note not found ! ");
    res.json(note);
  } catch (err) {
    console.log("error in getting data controller ", err);
    res.status(500).json("internal server error", err);
  }
}

export const createNotes = async (req, res) => {
  // create a note and save it in the database.
  // console.log(req.body); // it will give the data in the request body.
  try {
    const { title, content } = req.body;
    const note = new Note({ content, title });
    const savedNote = await note.save();
    // res.status(201).json({message : "note created successfully."});
    res.status(201).json(savedNote);
    console.log({ title, content }); // we cant use it directly.
  } catch (error) {
    console.log("error in creating note controller ", error);
    res.status(500).json({ message: "internal server error", error });
  }
};

export const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" }, { new: true });
    res.status(200).json(updatedNote);
  } catch (err) {
    console.log("error in updating note controller ", err);
    res.status(500).json({ message: "internal server error", error: err });
  }
};

export const deleteNotes = async (req, res) => {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found" });
    // res.status(200).json(deleteNote);
    res.status(200).res.json({ message: "notes deleted successfully." });
  } catch (err) {
    console.log("error in deleteNote controller", err);
    res.status(500).json({ message: "Internal server error " });
  }
};
