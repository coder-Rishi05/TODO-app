### Basics

```
Frontend -> JS + React.

Backend -> node + mongodb.

```

---

### MERN

```
MongoDb - Place where data is stored.

express - a web framework ready to use toolbox for building web apps faster and more easily.

react - frontend

node - allow to run js on server

```

---

### setup

```
npm init -y : initialise a pakage.json.
npm i express@4.18.2 : installing an older version of express.

creating a server.js file.

```

---

### server.js

```
import express from "express";

const app = express();

app.listen(5001, () => console.log("listning"));
// using express and creating server.
```

---

### running the server.js

```
- npm run server.js : it will throw error not run on first setup.
- npm run dev : aslo fail.
- node .\server.js : also will not run throw erroe for import as it is not module file.

to fix it --

- on package.json add "type":"module" which is commonjs by default.


to run on "type":"commonjs",  we need to use require('express');

to use npm run dev we include dev on package.json

 "dev": "node ./server.js"

```

---

### setting up route

```

app.get('/api/notes',(req,res)=>{
    res.send('you got 5 notes !')

})

it will display the message at : loccalhost:5000/api/notes

```

---

### How full stack app work

```
client send request to the serever. The backend will perform action and send response, which will either fail or sucessfull.

```

---

### API : Application Programming Interface

```
It allow 2 diffrent apps to talk to each other.


```

---

### Types of API

```
1. Rest Api :

Methods :
    GET : Get some request.
    POST  : create a post.
    PUT : Update a post.
    DELETE : Delete a post


app.get(route, (req, res) => {
  // send the notes
  res.send("you got 5 notes !");
});



app.post('/api/notes/create', (req, res) => {
   // create a new note
   res.send("note created successfully!");
 });
 app.put("/api/notes/update", (req, res) => {
   // update an existing note
   res.send("note updated successfully!");
 });
 app.delete("/api/notes/delete", (req, res) => {
   // delete an existing note
   res.send("note deleted  successfully!");
 });

```

---

### HTTP Status code :

```
    1. 100 : Informational error.

    2. 200 : 200 Success
                200 ok : everything right.
                201 created : new resource sucessfully created. (after post request).

    3. 300 : Redirecting
                300 : tell the client that the thing he is looking for is moved to another server.
                301 : it means the site url has changed.

    4. 400 : This happens when problem is user side.

                400 : Bad request : invalid request
                401 : Unauthorised: must log in.
                403 : Forbidden : not allowd to acess.
                403 : Not found : the url not exist.
                429 : Too many request :

    5. 500 : Server error : When something wrong on the server side even client made a valid request.

                500 : Internal server error. : Something broke on the server.
                503 :  Service unavailable :  Server is temprorily overload or down.

```

---

### Nodemon

```
The nodemon npm package is used to run the server automatically on every changes on the server.js file.

to use this install it first then,
  "dev": "nodemon ./server.js" -> for development
  "start": "node server.js" -> for  production


  so when we are developing the site we can use the dev but when our site is production then we use start with node.

```

---

### What is endpoint.

```
An endpoint is an combination of URL + HTTP method that lets the client interact with a specific resourse.


```

---

### creating routes

```
    app.get(route, (req, res) => {
      // send the notes
      res.send("you got 15 notes.");
    });

    app.post(route,(req,res)=>{

      res.status(201).json({message:'post recieved successfully.'})
      console.log(res )
    })

    app.put(route+"/:id",(req,res)=>{
      res.status(200).json({message:'post updated successfully.'})
    })
    app.delete(route+"/:id",(req,res)=>{
      res.status(200).json({message:'note deleted successfully.'})
    })

    here we will create diffrent routes like get,post,put and delete which will have unique id and status code for every action to be performed.

```

---

### patching the notes.

```
To patch the routes we  create a new file under routes folder. -> notesRoute.js

notesRoute.js where we will use express.Router() method to create diffrent routes.

ex:

    import express from "express";

    const router = express.Router();

    router.get("/post", (req, res) => {
      // send the notes
      res.status(200).send("You fetched the notes.");
    });

    router.post("/", (req, res) => {
      res.status(201).json({ message: "notes created successfully." });
      console.log(res);
    });

    router.put("/:id", (req, res) => {
      res.status(200).json({ message: "notes updated successfully." });
    });

    router.delete("/:id", (req, res) => {
      res.status(200).json({ message: "notes deleted successfully." });
    });

    export default router;

  Then inside server.js we will use app.use("routes", notesRoutes ) from notesRoutes.js

  import express from "express";
  import notesRoutes from './routes/notesRoutes.js'

  const app = express();


  app.use("/api/notes",notesRoutes)


  const port = 5000;

  app.listen(port, () => {
    console.log("listning on port : ", port);
    console.log("http://localhost:5000" );
  });


```
--- 

### controllers

```

As the notesRoutes function can be very huge so we can use something called controller.

create folder/contoller/filecontoller.js


    export const getAllNotes = async (req, res) => {
      // send the notes
      res.status(200).send("You fetched the notes.");
    }

    export const createNotes = async (req,res)=>{
        res.status(201).json({ message: "notes created successfully." });
        console.log(res);
    }
    export const updateNotes = async(req, res) => {
      res.status(200).json({ message: "notes updated successfully." });
    }
    export const deleteNotes = async (req, res) => {
      res.status(200).json({ message: "notes deleted successfully." });
    }

inside notesRoute.js

      import express from "express";
    import {
      createNotes,
      deleteNotes,
      getAllNotes,
      updateNotes,
    } from "../controllers/notesController.js";

    const router = express.Router();

    router.get("/", getAllNotes);

    router.post("/post", createNotes);

    router.put("/:id", updateNotes);

    router.delete("/:id", deleteNotes);

    export default router;


```
---

### optimizing app src folder

```

create a src folder

move controller, route and server.js inside it.

also make changes to the package.json in path as /server.js to src/server.js
```
---

## 🛠️ Debugging: `Cannot find module '/src/server.js'` in Node.js

This project encountered an error while trying to run a Node.js backend using `nodemon`. This README explains the **issue**, **cause**, and **solution** to help future debugging.

---

## ❌ Problem

While running the project using:

```bash
npm run dev

The following error occurred:
```
```
Error: Cannot find module 'D:\src\server.js'
```
--- 
# 📌Root Cause

1. Incorrect paths in package.json:

"dev": "nodemon /src/server.js",
"start": "node /src/server.js"

The / at the beginning made Node.js search for the file at:

D:/src/server.js

instead of the correct path inside the project folder.

2. Incorrect import path in server.js:

```
import notesRoutes from "/src/routes/notesRoutes.js";

Again, /src/... was treated as an absolute path and Node tried to find it at the root of the system (D:/), not inside the project folder.

```
---

# ✅ Solution

```
Updated package.json:
{
  "type": "module",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  }
}

Fixed server.js:

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();
const port = 5000;

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log("listening on port:", port);
});

1. Replaced /src/... with ./routes/... to make it relative to the current file.
 
2. Retained "type": "module" in package.json to use ES module syntax (import/export).


```

## 💡 Key Takeaways.

    In Node.js (with "type": "module"), absolute paths starting with / do not work unless you're pointing to the system root.

    Always use relative paths (./) when importing local files.

    Don't forget to include the full filename with extension (e.g., .js) when using ES Modules.

    nodemon and node will follow the exact path you give — no guesses.

    ✅ Now the command works:

    npm run dev

--- 


### Setting up database.

password  : JqTctOxqUWQRBuJl

Steps : 

1. Go to mongodb atlas.
2. create an account.
3. create a new project.
4. setup atlas.
5. go to netwoek access.
6. add ip address from anywhere.
7. connect to database.
8. install specific version -> npm install mongoose@7.0.3
9. create a new folder in backend config.
10. under it create a file db.js.

--- 
### code to connect to mongodb

```
db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rishabhrawat1800:JqTctOxqUWQRBuJl@cluster0.weiqwnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Mongoose connected successfully.");
  } catch (error) {
    console.log("failed to connect to Mongoose : ", error);
  }
};

server.js

import mongoose from "mongoose";

connectDB();

```

### setting up database. 

 "mongodb+srv://rishabhrawat1800:JqTctOxqUWQRBuJl@cluster0.weiqwnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  this is called test. without database name.
 in this url i will place my databse name as : notes_db

  "mongodb+srv://rishabhrawat1800:JqTctOxqUWQRBuJl@cluster0.weiqwnm.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0"

  we will put the url to .env file. not on the code page as anyobe can acess it.

  ex: .env file

    MONGO_URL =  mongodb+srv://rishabhrawat1800:JqTctOxqUWQRBuJl@cluster0.weiqwnm.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0

    we will not put any qotes "" here.

### installing package dotenv.

This package allow us to use .env variable.

on server.js
        |
        - console.log(process.env.MONGO_URL); // it will give undefined.
        | - to fix it we need to use dotenv package.
        
```
import dotenv from "dotenv"

dotenv.config()

console.log(process.env.MONGO_URL); 
```
now it will give the varible url we want to acess.

### Model creation

creating Models folder on backend and Notes.js file where we will create a schema and model for the mongodb server and content to upload.
```
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

```

# middleware and controllers.