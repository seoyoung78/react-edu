import AppContext from "AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom"

function AppHeader(props) {
  const appContext = useContext(AppContext);

  const logout = (evnet) => {
    appContext.setUid("");
  };

  return (
    <nav className="navbar bg-dark navbar-dark text-white font-weight-bold 
                    justify-content-between">
      <Link to="/" className="navbar-brand">
        <img src="/logo512.png" alt="" width="30" height="30" className="align-top"/>
        {' '} React
      </Link>
      <div>
        {appContext.uid === "" ?
          <Link to="/ch08/exam02" className="btn btn-success btn-sm">로그인</Link>
          :
          <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
        }
      </div>
    </nav>
  );
}

export default AppHeader;
