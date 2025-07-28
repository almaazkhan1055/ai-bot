import { ADDCHATTOROOM, CHATROOMLIST, SEARCHROOM } from "./action";

export const initialState = {
  chatRoomList: [],
  searchQuery: "",
};

export const reducer = (state = initialState, action) => {
  if (action.type === CHATROOMLIST) {
    return {
      ...state,
      chatRoomList: [...state.chatRoomList, action.payload],
    };
  }
  if (action.type === SEARCHROOM) {
    return {
      ...state,
      searchQuery: action.payload,
    };
  }
  if (action.type === ADDCHATTOROOM) {
    return {
      ...state,
      chatRoomList: state.chatRoomList.map((room) =>
        room.id === Number(action.payload.roomId)
          ? {
              ...room,
              chats: [
                ...(room.chats || []),
                {
                  question: action.payload.question,
                  answer: action.payload.answer,
                  timestamp: action.payload.timestamp,
                },
              ],
            }
          : room
      ),
    };
  }

  return state;
};
