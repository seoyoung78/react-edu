import { Link } from "react-router-dom";

function AppMenu() {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <h6 className="text-white">React Home</h6>
        <Link to="/" className="nav-link text-warning">Home</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch01. ComponenetDeclaration</h6>
        <Link to="/ch01/coma" className="nav-link text-warning">ComA 함수형 컴포넌트</Link>
        <Link to="/ch01/comb" className="nav-link text-warning">ComB 클래스형 컴포넌트</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch02. JSX</h6>
        <Link to="/ch02/exam01" className="nav-link text-warning">Exam01WrapElement</Link>
        <Link to="/ch02/exam02" className="nav-link text-warning">Exam02Expressions</Link>
        <Link to="/ch02/exam03" className="nav-link text-warning">Exam03Condition</Link>
        <Link to="/ch02/exam04" className="nav-link text-warning">Exam04InlineCss</Link>
        <Link to="/ch02/exam05" className="nav-link text-warning">Exam05CssClass</Link>
        <Link to="/ch02/exam06" className="nav-link text-warning">Exam06EventHandling</Link>
        <Link to="/ch02/exam07" className="nav-link text-warning">Exam07Repeat</Link>
        <Link to="/ch02/exam08" className="nav-link text-warning">Exam08Ref</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch03. Props and State</h6>
        <Link to="/ch03/exam01" className="nav-link text-warning">Exam01Props</Link>
        <Link to="/ch03/exam02" className="nav-link text-warning">Exam02State</Link>
        <Link to="/ch03/exam03" className="nav-link text-warning">Exam03UseReducer</Link>
        <Link to="/ch03/exam04" className="nav-link text-warning">Exam04StateInitFun</Link>
        <Link to="/ch03/exam05" className="nav-link text-warning">Exam05StateToProp</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch04. LifeCycle</h6>
        <Link to="/ch04/exam01" className="nav-link text-warning">Exam01CallbackMethod</Link>        
        <Link to="/ch04/exam02" className="nav-link text-warning">Exam02UseEffect</Link>        
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch05. Style</h6>
        <Link to="/ch05/exam01" className="nav-link text-warning">Exam01Css</Link>             
        <Link to="/ch05/exam02" className="nav-link text-warning">Exam02Sass</Link>
        <Link to="/ch05/exam03" className="nav-link text-warning">Exam03StyledComponent</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch06. Route</h6>
        <Link to="/ch06" className="nav-link text-warning">BoardTable</Link>
        {/* <Link to="/ch06?pageNo=1" className="nav-link text-warning">BoardTable</Link> */}
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch07. Performance Improvement</h6>
        <Link to="/ch07/exam01" className="nav-link text-warning">Exam01UseMemo</Link>
        <Link to="/ch07/exam02" className="nav-link text-warning">Exam02UseCallback</Link>
        <Link to="/ch07/exam03" className="nav-link text-warning">Exam03SetterFunArg</Link>
        <Link to="/ch07/exam04" className="nav-link text-warning">Exam04ReactMemo</Link>
        <Link to="/ch07/exam05" className="nav-link text-warning">Exam05ListWithScroll</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch08. Global State</h6>
        <Link to="/ch08/exam01" className="nav-link text-warning">Exam01ColorContext</Link>
        <Link to="/ch08/exam02" className="nav-link text-warning">Exam02AppContext</Link>
      </li>
    </ul>
  );
}

export default AppMenu;