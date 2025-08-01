import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimit from "./config/upstash.js";
import rateLimiter from "./middleware/rate_limiter.js";
// import ratelimiter from "./middleware/rate_limiter.js";

dotenv.config();

const app = express();

// connectDB();

// middleware
app.use(express.json()); // to parse JSON data from the request body so we can acess it in req.body in controllers. {title and content}
app.use(rateLimiter);
// settting up middleware. custom simple middleware
app.use((req, res, next) => {
  console.log(`request method is ${req.method} and req url is ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);

// console.log(process.env.MONGO_URL);  it will give undefined.

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

const PORT = process.env.PORT || 1234;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listning on PORT : ", PORT);
    console.log("http://localhost:" + PORT);
  });
});
