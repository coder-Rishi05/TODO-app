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

### setting up Hottoast

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

### Installed tailwind.
