function ComBFunTypeEventHandling(props) {
  const handleBtn1 = (event) => { //event 객체는 함수 실행하면 자동으로 넘어옴
    console.log("버튼1이 클릭되었습니다.");
    console.log(event.target.name);
    console.log(event.type);
  };

  const handleBtn2 = (event, x, y) => {
    const result = x + y; 
    console.log("계산 결과: ", result);
    console.log(event.target.name);
    console.log(event.type);
  };

  return (
    <div className="card">
      <div className="card-header">
        ComBFunTypeEventHandling
      </div>
      <div className="card-body">
        <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={handleBtn1}>버튼1</button>
        <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event) => handleBtn2(event, 3, 5)}>버튼2</button> {/* 매개값이 있는 함수의 경우 */}
      </div>
    </div>
  );
}

export default ComBFunTypeEventHandling;