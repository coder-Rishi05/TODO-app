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

### How full stack app work

```
client send request to the serever. The backend will perform action and send response, which will either fail or sucessfull.

```

### API : Application Programming Interface

```
It allow 2 diffrent apps to talk to each other. 


```