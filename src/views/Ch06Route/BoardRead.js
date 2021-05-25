import qs from "qs";
import { Link, useHistory } from "react-router-dom";
import { getBoard, deleteBoard } from "./data";

function BoardRead(props) {
  const bno = parseInt(props.match.params.bno);  
  const board = getBoard(bno);
  const queryString = qs.parse(props.location.search, {ignoreQueryPrefix: true});
  const pageNo = parseInt(queryString.pageNo);

  const history = useHistory();   //브라우저에 있는 history 객체 이용을 위한 Hook 사용
  
  const handleRemove = (event) => {
    deleteBoard(bno);
    // history.push("/ch06?pageNo=" + pageNo);   //URL 변경 방법
    history.goBack();   // 뒤로가기
    // props.history.goBack();
  };

  return (
    <div className="card">
      <div className="card-header">
        BoardRead
      </div>
      <div className="card-body">
        <div>
          <p>bno: {board.bno}</p>
          <p>btitle: {board.btitle}</p>
          <p>bcontent: {board.bcontent}</p>
          <p>bwriter: {board.bwriter}</p>
          <p>bdate: {board.bdate}</p>
          <p>bhitcount: {board.bhitcount}</p>
        </div>
        <div>
          <Link to={"/ch06?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
          <Link to={`/ch06/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
          <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default BoardRead;