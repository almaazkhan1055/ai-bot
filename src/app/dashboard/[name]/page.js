"use client";
import { useParams } from "next/navigation";
import React from "react";
import Dashboard from "../page";

const ChatRoomPage = () => {
  const params = useParams();
  console.log(params.name);

  return (
    <Dashboard>
      <h2>{params.name}</h2>
    </Dashboard>
  );
};

export default ChatRoomPage;
