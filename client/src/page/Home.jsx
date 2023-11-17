import React from "react";
import img1 from "../assets/Abstract Design.svg";
import WlcComp from "../components/HomeComp/WlcComp";
import OurProduct from "../components/HomeComp/OurProduct";
function Home() {
  return (
    <div>
      <img src={img1} alt="" className="absolute inset-0" />
      <WlcComp/>
      <OurProduct/>
    </div>
  );
}

export default Home;
