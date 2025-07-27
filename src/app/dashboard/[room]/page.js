"use client";
import { useParams } from "next/navigation";
import React from "react";
import Dashboard from "../page";

const ChatRoomPage = () => {
  const { room } = useParams();

  return (
    <Dashboard>
      <h2>Room: {decodeURIComponent(room)}</h2>
    </Dashboard>
  );
};

export default ChatRoomPage;
