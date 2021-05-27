import { Route, Switch } from "react-router-dom";
import Exam01ColorContext from "./Exam01ColorContext";
import Exam02AppContext from "./Exam02AppContext";

function Ch08GlobalState(props) {
  return (
    <div className="card">
      <div className="card-header">
        Ch08GlobalState
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`} exact component={Exam01ColorContext}/>
          <Route path={`${props.match.url}/exam02`} exact component={Exam02AppContext}/>
        </Switch>
      </div>
    </div>
  );
}

export default Ch08GlobalState;