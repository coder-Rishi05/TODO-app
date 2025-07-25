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

### controllers

As the notesRoutes function can be cvery huge so we can use something called controller.


```

```