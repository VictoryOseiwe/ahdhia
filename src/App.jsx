import React from "react";
import Navbar from "./component/layout/Navbar/Navbar";
import Footer from "./component/layout/Footer/Footer";
import Home from "./Home/Home";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
