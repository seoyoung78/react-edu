import React from "react";
import { useRef } from "react";

function ComA() {
  const inputRef = useRef();
  const divRef = useRef();

  const handleBtn = (event) => {
    //current: 객체의 번지를 찾아서 가져옴
    inputRef.current.style.backgroundColor = "orange";
    inputRef.current.focus();
    divRef.current.innerHTML = "<img src='/resources/img/photo1.jpg' width='200'/>";
  }

  return (
    <div className="card">
      <div className="card-header">
      ComA
      </div>
      <div className="card-body">
        <div className="form-row align-items-center">
          <input type="text" ref={inputRef}/> {/* 객체의 번지를 ref를 통해 저장 */}
          <button className="ml-2 btn btn-primary btn-sm" onClick={handleBtn}>DOM 변화 주기</button>
        </div>
        <div className="mt-2" ref={divRef}></div>
      </div>
    </div>
  );
}

export default ComA;