import React from "react";
import Button from "../button";
import { buttons } from "@/app/data";

const AuthModal = ({ setShowModal }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl text-xl w-[400px] absolute p-10 z-50 bg-[#2f2f2f] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="text-2xl">Welcome</span>
      <p className="text-center text-lg">
        Log in or sign up to get smarter responses, upload files and images, and
        more.
      </p>
      {buttons.map((button) => {
        return (
          <Button
            key={button.name}
            text={button.name}
            bgColor={button.bgColor}
            color={button.color}
            path={button.href}
            authModal
          />
        );
      })}
      <button
        className="underline text-sm cursor-pointer"
        onClick={() => setShowModal(false)}
      >
        stay logged out
      </button>
    </div>
  );
};

export default AuthModal;
