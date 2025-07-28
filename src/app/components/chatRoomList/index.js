"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const ChatRoomList = ({ isSidebarOpen }) => {
  const router = useRouter();
  const chatroomlist = useSelector((state) => state.chatRoomList);
  const searchQuery = useSelector((state) => state.searchQuery);

  const filteredList = chatroomlist.filter((room) =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`flex flex-col ${
        isSidebarOpen ? "px-4" : "items-center hidden"
      } gap-1`}
    >
      <p className="text-[#666666]">Chats</p>

      {filteredList.length === 0 && (
        <p className="text-red-500">No chats available</p>
      )}

      {filteredList.map((room) => {
        return (
          <span
            key={room.id}
            className="flex items-center gap-2 text-md hover:bg-[#303030] cursor-pointer rounded-full p-2"
            onClick={() => router.push(`/chatroom/${room.id}`)}
          >
            {room.name}
          </span>
        );
      })}
    </div>
  );
};

export default ChatRoomList;
