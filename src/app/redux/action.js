export const CHATROOMLIST = "CHATROOMLIST";
export const SEARCHROOM = "SEARCHROOM";
export const ADDCHATTOROOM = "ADDCHATTOROOM";

export const chatRoomListRedux = (value) => ({
  type: CHATROOMLIST,
  payload: value,
});

export const searchRoomRedux = (value) => ({
  type: SEARCHROOM,
  payload: value,
});

export const addChatToRoomRedux = (roomId, question, answer) => ({
  type: ADDCHATTOROOM,
  payload: { roomId, question, answer, timestamp: new Date().toISOString() },
});
