import { CHATROOMLIST, SEARCHROOM } from "./action";

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
  return state;
};
