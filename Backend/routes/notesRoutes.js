import express from 'express'

const router = express.Router();

router.get("/",(req, res) => {
  // send the notes
  res.status(200).send("You pathched the notes.");
})

export default router;

// const route = "/api/notes/send";
// app.get(route, (req, res) => {
//   // send the notes
//   res.status(200).send("you got 15 notes.");
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