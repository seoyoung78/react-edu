import { useState } from "react";
import ClassType from "./ClassType";


function Exam01CallbackMethod(props) {
  const [startNum, setStartNum] = useState(0);
  const handleChange = (event) => {
    setStartNum(parseInt(event.target.value));
  };
  return (
    <div className="card">
      <div className="card-header">
        Exam01CallbackMethod
      </div>
      <div className="card-body">
        <input type="number" name="startNum" value={startNum} onChange={handleChange}/>
        <div className="mt-2"/>
        <ClassType startNum={startNum}/>
      </div>
    </div>
  );
}

export default Exam01CallbackMethod;