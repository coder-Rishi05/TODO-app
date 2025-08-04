### Setting up frontend

- Installing vite,react.
- installing react-router, hot-pot notification.
- Setting up react router.

### React router dom.

- we will setup BrowserRouter on main.jsx so, We can now use Router in our entire website.

```


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);



```

- then setup routers on app.jsx

```

import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import NoteDetailPage from "./Pages/NoteDetailPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;


```

### setting up Hot-toast

importing on main.jsx

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster /> // toast from react-hot-toast
    </BrowserRouter>
  </StrictMode>
);

```

using on app.jsx

```
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <button onClick={()=>toast.error("congrats")} >Click me</button> // using on app.jsx file
    </div>
  )
}
toast.success("congrats")
toast.error("congrats")
diffrent message for diffrent cases.
```

- Installing tailwind.
- Installing daisy ui.
- npm i -D daisyui@4.12.24
- under tailwind config

  ```
    import daisyui from 'daisyui';
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [daisyui],
    }
  ```

### getting daisyui themes

    ```
    import daisyui from 'daisyui';
      /** @type {import('tailwindcss').Config} */
      export default {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [daisyui],
        daisyui:{
          themes:["light","dark","forest"]
        }
      }


```
to use theme we can simply write
```
return (

  <div data-theme = "forest" > // to use forest theme
  </div>
)
```

### Installing lucide-react for icons.

```
to install -

 npm i lucide-react
```

### installing axios for api calling.


we can also fetch data from the axios like this :

```

    import { useEffect, useState } from "react";
    import Navbar from "../components/Navbar";
    import RateLimit from "../components/RateLimit";
    import axios from "axios";

    const HomePage = () => {
    const [rate_limit, setRate_limit] = useState(true);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchNotes = async () => {
    try {
    const res = await axios.get("http://localhost:1234/api/notes");
    const data = res.data;
    } catch (err) {
    console.log("Problem in getting the request ", err);
    }
    };
    fetchNotes()
    }, []);

    return (
    <div className="min-h-screen   ">
    <Navbar />

          {rate_limit && <RateLimit />}
        </div>

    );
    };

    export default HomePage;

```

### CORS 

- While fetching the data we might egt cors error.

```
CORS is a browser security rule. When a website tries to get data from another website ie. frontend calling api on a diffrent domain the browser might block it for security resons.

Ex :

https:localhost:3000 and api at htt://api/com

frontend fetch a request to get data 

  fetch('http://api.exp.com/users')

But browser gives CORS error

```

### fixing cors

```
npm i cors
```

on server.js
```
import cors from 'cors

app.use(cors()) // it will allow every cors request.

to use for specific requets.

app.use(cors({
  origin:'http://localhost:5173',
}))

```

### 