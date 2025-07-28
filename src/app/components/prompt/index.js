"use client";
import React, { useState } from "react";
import { IoMdAttach } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { addChatToRoomRedux } from "@/app/redux/action";
import FileUpload from "../fileupload";
import Button from "../button";

const Prompt = () => {
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const askGemini = async (questionText) => {
    try {
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(questionText);
      const response = await result.response;
      const text = response.text();
      dispatch(addChatToRoomRedux(Number(id), questionText, text));
    } catch (err) {
      console.error("Gemini error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    const questionText = prompt;
    setPrompt("");
    askGemini(questionText);
  };

  return (
    <div className="bg-[#303030] md:w-[60%] w-full rounded-3xl p-2">
      <input
        type="text"
        value={prompt}
        placeholder="Ask anything"
        className="min-w-full mb-4 mt-2 px-2 outline-0"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <span
        className={`${
          prompt ? "flex items-center justify-between" : "inline-block"
        }`}
      >
        <FileUpload text={"Attach"} bgColor="#2F2F2F" icon={<IoMdAttach />} />
        {prompt && (
          <Button
            icon={<FaArrowUp />}
            bgColor={"#fff"}
            color={"#000"}
            onClickFunction={handleSubmit}
          />
        )}
      </span>
    </div>
  );
};

export default Prompt;
