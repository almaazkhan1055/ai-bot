export const CHATROOMLIST = "CHATROOMLIST";
export const SEARCHROOM = "SEARCHROOM";

export const chatRoomListRedux = (value) => ({
  type: CHATROOMLIST,
  payload: value,
});

export const searchRoomRedux = (value) => ({
  type: SEARCHROOM,
  payload: value,
});
