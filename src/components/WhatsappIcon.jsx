import React from "react";
import Whatsapp from "../public/whatsapp.png";
const WhatsappIcon = () => {
  return (
    <a href="#" className="block">
      <img
        className="fixed right-5 bottom-5 z-50 h-14 w-14"
        src={Whatsapp}
        alt=""
      />
    </a>
  );
};

export default WhatsappIcon;
