import RootLayout from "./Root";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
        <Route path="/" element={ <Home /> }  ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
