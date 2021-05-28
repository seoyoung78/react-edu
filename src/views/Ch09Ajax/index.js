import { Switch, Route } from "react-router-dom";
import Exam01AsyncControl from "./Exam01AsyncControl";

function Ch09Ajax(props) {
  return (
    <div className="card">
      <div className="card-header">
        Ch09Ajax
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`} exact component={Exam01AsyncControl}/>
        </Switch>
      </div>
    </div>
  );
}

export default Ch09Ajax;