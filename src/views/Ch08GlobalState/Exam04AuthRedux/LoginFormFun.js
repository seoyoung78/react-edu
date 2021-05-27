import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSetUidAction } from "redux/auth-reducer";

function LoginFormFun(props) {
  const [uid, setUid] = useState("");
  const globalUid = useSelector((state) => state.authReducer.uid);
  const dispatch = useDispatch();

  const handleChange = (evnet) => {
    setUid(evnet.target.value);
  };

  const login = (event) => {
    dispatch(createSetUidAction(uid));
    setUid("");
  };

  const logout = (event) => {
    dispatch(createSetUidAction(""));
  };

  return (
    <div className="card">
      <div className="card-header">
        LoginFormFun
      </div>
      <div className="card-body">
        <div className="form-group row">
          <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="uid" value={uid} onChange={handleChange}/>
          </div>
        </div>
        {globalUid === "" ? (
          <button className="btn btn-success btn-sm" onClick={login}>로그인</button>
        ) : ( 
          <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
        )}
      </div>
    </div>
  );
}

export default LoginFormFun;