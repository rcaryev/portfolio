import React from "react";
import img_1 from "assets/images/1.jpg";
import img_2 from "assets/images/2.png";
import img_3 from "assets/images/3.jpg";
import img_4 from "assets/images/4.jpg";
import img_5 from "assets/images/5.jpg";
import img_6 from "assets/images/6.png";
import PortfItem from "./portf-item";

export default function PortfolioContent() {
  return (
    <div>
      <h2 className="text-3xl font-sans my-8 ">
        These are test for show design
      </h2>
      <div className="flex flex-wrap ">
        <PortfItem image={img_1} text="test site" />
        <PortfItem image={img_2} text="test site" />
        <PortfItem image={img_3} text="test site" />
        <PortfItem image={img_4} text="test site" />
        <PortfItem image={img_5} text="test site" />
        <PortfItem image={img_6} text="test site" />
      </div>
    </div>
  );
}
