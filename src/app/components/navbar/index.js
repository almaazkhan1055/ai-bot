"use client";
import React from "react";
import Button from "../button";
import { buttons } from "@/app/data";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between">
      <div className="text-xl">ChatGPT</div>
      <div
        className={`flex items-center gap-5 ${
          (pathname === "/login" || pathname === "/register") && "hidden"
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
    </div>
  );
};

export default Navbar;
