"use client";
import React, { useEffect, useState } from "react";
import Button from "../button";
import { buttons } from "@/app/data";
import { usePathname } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import { tokenCheck } from "@/app/utils/tokenCheck";

const Navbar = ({ handleLogout, loading }) => {
  const [tokenExists, settokenExists] = useState(false);
  const pathname = usePathname();

  const verifyToken = async () => {
    const tokenExists = await tokenCheck();
    settokenExists(tokenExists);
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div className="flex items-center justify-between p-4 pb-2 border-b border-b-[#303030]">
      <div className="text-xl">ChatGPT</div>
      <div
        className={`max-sm:flex-col flex items-center gap-5 ${
          (tokenExists || pathname === "/login" || pathname === "/register") &&
          "hidden"
        }`}
      >
        {buttons?.map((button) => {
          return (
            <Button
              key={button.name}
              text={button.name}
              bgColor={button.bgColor}
              color={button.color}
              path={button.href}
            />
          );
        })}
      </div>

      {tokenExists && (
        <span
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={handleLogout}
        >
          <IoMdLogOut /> Logout
        </span>
      )}
    </div>
  );
};

export default Navbar;
