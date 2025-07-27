"use client";
import { searchRoomRedux } from "@/app/redux/action";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from "react-redux";

const SearchChat = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();

  return (
    <span
      className="flex items-center gap-2 text-md hover:bg-[#303030] cursor-pointer rounded-full p-2"
      onClick={() => setIsSidebarOpen(true)}
    >
      <IoMdSearch size={20} />
      <input
        type="text"
        className={`${!isSidebarOpen && "hidden"} outline-0`}
        placeholder="Search chat"
        onChange={(e) => dispatch(searchRoomRedux(e.target.value))}
      />
    </span>
  );
};

export default SearchChat;
