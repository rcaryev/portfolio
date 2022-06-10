import React from "react";
import { IoMdPhonePortrait, IoMdColorPalette } from "react-icons/io";
import { MdManageSearch, MdVoiceChat } from "react-icons/md";
import { SiSemanticweb } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import ServiceItem from "./service-item";
import { data } from "assets/data/data";

export default function ServiceContent() {
  const style = { fontSize: "3rem", color: "#e05000" };
  return (
    <div className="flex flex-wrap ">
      <ServiceItem
        icon={<IoMdPhonePortrait style={style} />}
        serviceName="Web Design"
        text={data.texts.p_xs}
      />
      <ServiceItem
        icon={<FaLaptopCode style={style} />}
        serviceName="Web Design"
        text={data.texts.p_xs}
      />
      <ServiceItem
        icon={<IoMdColorPalette style={style} />}
        serviceName="Web Design"
        text={data.texts.p_xs}
      />
      <ServiceItem
        icon={<SiSemanticweb style={style} />}
        serviceName="Web Design"
        text={data.texts.p_xs}
      />

      <ServiceItem
        icon={<MdManageSearch style={style} />}
        serviceName="Web Design"
        text={data.texts.p_xs}
      />

      <ServiceItem
        icon={<MdVoiceChat style={style} />}
        serviceName="Web Design"
        text={data.texts.p_xs}
      />
    </div>
  );
}
