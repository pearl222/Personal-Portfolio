import React, { useState } from "react";
import NavBar from "./links/NavBar";
import Footer from "./footer/Footer";
import Portfolio from "./portfolio/Portfolio";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="">
      <NavBar toggle={toggle} setToggle={setToggle} />
      <Portfolio toggle={toggle} />
      <Footer toggle={toggle} />
    </div>
  );
}
export default App;
