import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import Scholar from "./Scholar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/Scholar" element={<Scholar />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
