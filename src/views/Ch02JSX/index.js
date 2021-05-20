import { Switch, Route } from "react-router-dom";
import Exam01WrapElement from "./Exam01WrapElement";
import Exam02Expressions from "./Exam02Expressions";
import Exam03Condition from "./Exam03Condition";
import Exam04InlineCss from "./Exam04InlineCss";
import Exam05CssClass from "./Exam05CssClass";
import Exam06EventHandling from "./Exam06EventHandling";

function Ch02JSX () {
  return (
    <div className="card">
      <div className="card-header">
        Ch02JSX
      </div>
      <div className="card-body">
        <Switch>
          <Route path="/ch02/exam01" exact component = {Exam01WrapElement}/>
          <Route path="/ch02/exam02" exact component = {Exam02Expressions}/>
          <Route path="/ch02/exam03" exact component = {Exam03Condition}/>
          <Route path="/ch02/exam04" exact component = {Exam04InlineCss}/>
          <Route path="/ch02/exam05" exact component = {Exam05CssClass}/>
          <Route path="/ch02/exam06" exact component = {Exam06EventHandling}/>
        </Switch>
      </div>
    </div>
  );
};

export default Ch02JSX;