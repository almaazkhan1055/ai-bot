"use client";
import Dashboard from "@/app/dashboard/page";
import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useParams } from "next/navigation";
import { db } from "../../../../firebase.config";

const ChatRoomPage = () => {
  const { id } = useParams();
  const [currentRoom, setCurrentRoom] = useState({});

  useEffect(() => {
    if (!id) return;

    const unsubscribe = onSnapshot(doc(db, "chatrooms", id), (docSnapshot) => {
      if (docSnapshot.exists()) {
        setCurrentRoom(docSnapshot.data());
      }
    });

    return () => unsubscribe();
  }, [id]);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "N/A";
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    chatBox?.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" });
  }, [currentRoom?.chats?.length]);

  return (
    <Dashboard>
      <div
        id="chat-box"
        className="w-full md:w-[80%] h-[calc(100vh-250px)] overflow-y-scroll hide-scrollbar"
      >
        {currentRoom?.chats?.map((obj, index) => (
          <div key={index}>
            <div className="text-right text-gray-300 mb-5">
              <p className="font-semibold">{obj.question}</p>
              <span className="text-xs text-gray-700">
                {formatTimestamp(obj.timestamp)}
              </span>
            </div>
            <div className="text-left text-gray-300 mb-5">
              <p className="font-semibold">{obj.answer}</p>
              <span className="text-xs text-gray-700">
                {formatTimestamp(obj.timestamp)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Dashboard>
  );
};

export default ChatRoomPage;
