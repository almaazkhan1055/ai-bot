"use client";
import { useParams } from "next/navigation";
import React from "react";
import Dashboard from "../page";

const ChatRoomPage = () => {
  const params = useParams();
  // console.log(params);

  return <Dashboard></Dashboard>;
};

export default ChatRoomPage;
