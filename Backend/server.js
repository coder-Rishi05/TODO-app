import express from "express";
import notesRoutes from './routes/notesRoutes.js'

const app = express();


app.use("/api/notes",notesRoutes)

const route = "/api/notes/send";

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

const port = 5000;

app.listen(port, () => {
  console.log("listning on port : ", port);
  console.log("http://localhost:5000" );
});
