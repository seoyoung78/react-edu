import axios from "axios";
import qs from "qs";

export function getBoardList(pageNo=1) {
  const promise = axios.get("/boards", {params: {pageNo}});
  return promise;
};

export function createBoardNoAttach(board) {
  const promise = axios.post("/boards", board);   //JSON: {"btitle":"제목1", "bcontent":"내용1", ...}
  // const promise = axios.post("/boards", qs.stringify(board));  //qs : btitle=제목1 & bcontent=내용1 & ...
  return promise;
};