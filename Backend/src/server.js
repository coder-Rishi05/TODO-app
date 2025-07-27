import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

console.log(process.env.MONGO_URL); // it will give undefined.

// app.use("/api/notes/post",notesRoutes)
// app.use("/api/notes/update",notesRoutes)
// app.use("/api/notes/delete",notesRoutes)

// const route = "/api/notes/send";

// app.get(route, (req, res) => {
//   // send the notes
//   res.send("you got 15 notes.");
// });

// app.post(route, (req, res) => {
//   res.status(201).json({ message: "post recieved successfully." });
//   console.log(res);
// });

// app.put(route + "/:id", (req, res) => {
//   res.status(200).json({ message: "post updated successfully." });
// });
// app.delete(route + "/:id", (req, res) => {
//   res.status(200).json({ message: "note deleted successfully." });
// });

const port = 1234;

app.listen(port, () => {
  console.log("listning on port : ", port);
  console.log("http://localhost:5000");
});
