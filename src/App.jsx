import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import Scholar from "./Scholar";
import Footer from "./Footer";
import AboutMe from "./AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/Scholar" element={<Scholar />}></Route>
        <Route path="/AboutMe" element={<AboutMe />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
