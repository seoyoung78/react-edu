import { Switch, Route } from "react-router-dom";
import Exam01Props from "./Exam01Props";

function Ch03PropsAndState(props) {
  return (
    <div className="card">
      <div className="card-header">
        Ch03PropsAndState
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`} exact component = {Exam01Props}/>
        </Switch>
      </div>
    </div>
  );
}

export default Ch03PropsAndState;