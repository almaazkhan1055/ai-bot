import { chatRoomListRedux } from "@/app/redux/action";
import { useRouter } from "next/navigation";
import React from "react";
import { CiChat1 } from "react-icons/ci";
import { useDispatch } from "react-redux";

const NewChat = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const createChatRoomAndNavigate = () => {
    let name = prompt("please enter name of the room");
    if (!name) return;

    const newRoom = {
      name,
      id: Date.now(),
      chats: [],
    };

    dispatch(chatRoomListRedux(newRoom));
    router.push(`/dashboard/${encodeURIComponent(newRoom.name)}`);
  };

  return (
    <span
      className="flex items-center gap-2 text-md hover:bg-[#303030] cursor-pointer rounded-full p-2"
      onClick={createChatRoomAndNavigate}
    >
      <CiChat1 size={20} />
      <span className={`${!isSidebarOpen && "hidden"}`}>New chat</span>
    </span>
  );
};

export default NewChat;
