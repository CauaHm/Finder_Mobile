import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { Login } from "../Login";
import { Products } from "../Products"; 
import { Favorites } from "../Favorites"; 

export function Nav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} /> 
      </Routes>
    </BrowserRouter>
  );
}