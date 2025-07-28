"use client";
import Dashboard from "@/app/dashboard/page";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const ChatRoomPage = () => {
  const { id } = useParams();
  const chatroomList = useSelector((state) => state.chatRoomList);
  const currentRoom = chatroomList.find((room) => room.id === Number(id));

  const formatTimestamp = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <Dashboard>
      <div className="p-4 w-[60%] overflow-y-scroll h-[70%]">
        {currentRoom?.chats?.map((obj) => (
          <div key={obj.id}>
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
