"use client";
import React, { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import NewChat from "../newChat";
import SearchChat from "../searchChat";
import ChatRoomList from "../chatRoomList";
import { collection, onSnapshot, query } from "firebase/firestore"; // removed `orderBy`
import { db } from "../../../../firebase.config";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chatRooms, setChatRooms] = useState([]);

  console.log("chatRooms", chatRooms);

  useEffect(() => {
    const roomsRef = collection(db, "chatrooms");
    const q = query(roomsRef); // 🔥 Removed orderBy("createdAt")

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const rooms = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChatRooms(rooms);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      className={`${
        isSidebarOpen
          ? "w-[300px] max-md:min-w-full bg-[#181818]"
          : "w-[50px] bg-[#212121] border-r border-r-[#303030]"
      } py-4 px-2 trasition-all duration-300 ease-in-out flex flex-col gap-5`}
    >
      <div
        className={`${
          isSidebarOpen
            ? "flex items-center justify-end"
            : "flex items-center justify-center"
        }`}
      >
        <RiMenuFill
          size={24}
          className="cursor-pointer"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        />
      </div>

      <div
        className={`flex flex-col ${
          isSidebarOpen ? "px-4" : "items-center"
        } gap-1`}
      >
        <NewChat
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <SearchChat
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <ChatRoomList isSidebarOpen={isSidebarOpen} chatRooms={chatRooms} />
    </div>
  );
};

export default Sidebar;
