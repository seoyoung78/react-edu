import "./style.css";

function Exam05CssClass() {
  //자바스크립트 주석
  /* 
    여러행에 걸쳐 주석 내용 작성할 경우
  */
  const name = "React";

  return (
    <div className="card">
      {/* 헤더 내용 */}
      <div 
        className="card-header"   //부트스트랩의 Css Class 적용
      >
        Exam05CssClass
      </div>
      <div className="card-body">
        <div 
          className="react"   //style.css에 정의된 Class 적용
        >{name}</div>
      </div>
    </div>
  );
}

export default Exam05CssClass;