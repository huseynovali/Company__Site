import React, { useState } from "react";

import WlcLeft from "./WlcLeft";
import WlcRight from "./WlcRight";
function WlcComp() {


  return (
    <div className="py-[60px] lg:flex ">
      <WlcLeft />
      <WlcRight />
    </div>
  );
}

export default WlcComp;
