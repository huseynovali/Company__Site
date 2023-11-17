import React from "react";
import img1 from "../assets/Abstract Design.svg";
import WlcComp from "../components/HomeComp/WlcComp";
function Home() {
  return (
    <div>
      <img src={img1} alt="" className="absolute inset-0" />
      <WlcComp/>
    </div>
  );
}

export default Home;
