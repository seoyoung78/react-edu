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
      </li>
    </ul>
  );
}

export default AppMenu;