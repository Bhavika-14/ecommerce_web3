import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./components/main";
import Clothing from "./components/clothing";
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/clothing" element={<Clothing />} />
      </Routes>
      <Footer />
    </>
  
  );
}

export default App;
