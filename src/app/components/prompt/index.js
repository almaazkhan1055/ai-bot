"use client";
import React, { useState } from "react";
import { IoMdAttach } from "react-icons/io";
import FileUpload from "../fileupload";
import Button from "../button";
import { FaArrowUp } from "react-icons/fa";

const Prompt = () => {
  const [prompt, setprompt] = useState("");

  return (
    <div className="bg-[#303030] w-[60%] rounded-3xl p-2">
      <input
        type="text"
        placeholder="Ask anything"
        className="min-w-full mb-4 mt-2 px-2 outline-0"
        onChange={(e) => setprompt(e.target.value)}
      />
      <span
        className={`${
          prompt ? "flex items-center justify-between" : "inline-block"
        }`}
      >
        <FileUpload text={"Attach"} bgColor="#2F2F2F" icon={<IoMdAttach />} />
        {prompt && (
          <Button icon={<FaArrowUp />} bgColor={"#fff"} color={"#000"} />
        )}
      </span>
    </div>
  );
};

export default Prompt;
