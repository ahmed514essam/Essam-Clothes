import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "./Pages/Home/Home";
import Root from "./Root";
import Account from "./Pages/Account/Account/Account";
import Category from "./Pages/Category/Category";
import ProductProfile from "./Pages/Category/ProductProfile/ProductProfile";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
        <Route path="/" element={ <Home /> }  ></Route>
        <Route path="/account" element={<Account />} />
        <Route path="/category" element={<Category />} />
        <Route path="/AboutProduct/:id" element={<ProductProfile />} />
        <Route path="/Cart" element={<Cart />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
