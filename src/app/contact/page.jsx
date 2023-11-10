import React from "react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

export const metadata = {
  title: "Contact | Yondika",
};

const Contact = () => {
  return (
    <div className="py-48 text-center text-3xl font-bold text-white flex flex-col items-center gap-4">
      Connect with me
      <ArrowDropDownCircleIcon />
    </div>
  );
};

export default Contact;
