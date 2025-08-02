import mongoose from "mongoose";

// so in notes we will create a schema based on the content we require and send to the server,

// 1- we need to create a schema
// 2- you would create a model based on that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // mongodb by default give us createdAt and updatedAT fields if we write timestamsps : true.

const Note = mongoose.model("Note", noteSchema); // create a note model based on this scheme. So every node will have a title,content and timestamp. Whenever they create it.

export default Note; // we will use this Note in other files to interact with the nodes. create , update and delete.
