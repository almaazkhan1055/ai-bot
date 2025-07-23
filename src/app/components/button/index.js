import Link from "next/link";
import React from "react";

const Button = ({
  text,
  bgColor = "#000",
  color = "#fff",
  icon,
  textSize = "18px",
  authModal,
  path = "",
  onClickFunction,
}) => {
  return (
    <Link
      href={path}
      className={`border border-gray-500 rounded-full px-2 justify-center py-1 font-medium cursor-pointer flex items-center gap-1 ${
        authModal && "w-full justify-center"
      }`}
      style={{
        backgroundColor: bgColor,
        color: color,
        fontSize: textSize,
        textAlign: "center",
      }}
      onClick={onClickFunction}
    >
      {icon && icon}
      {text && text}
    </Link>
  );
};

export default Button;
