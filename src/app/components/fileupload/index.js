"use client";
import React, { useState } from "react";
import Image from "next/image";

const FileUpload = ({ icon, bgColor, text }) => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files);
  };

  return (
    <>
      <label
        className={`border border-gray-500 rounded-full px-2 py-1 text-sm font-semibold cursor-pointer flex items-center gap-1`}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {icon}
        {text}
        <input type="file" className="hidden" onChange={handleFileUpload} />
        {file && <img src={file} />}
      </label>
    </>
  );
};

export default FileUpload;
