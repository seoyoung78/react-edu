import { Redirect, Route, Switch } from "react-router-dom";
import Home from "views/Home";
import Ch01ComponenetDeclaration from "views/Ch01ComponenetDeclaration";

function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ch01" component={Ch01ComponenetDeclaration}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppRoute;