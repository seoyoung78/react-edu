import { Redirect, Route, Switch } from "react-router-dom";
import Home from "views/Home";
import Ch01ComponenetDeclaration from "views/Ch01ComponenetDeclaration";
import Ch02JSX from "views/Ch02JSX";

function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ch01" component={Ch01ComponenetDeclaration}/>
      <Route path="/ch02" component={Ch02JSX}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppRoute;