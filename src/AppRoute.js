import { Redirect, Route, Switch } from "react-router-dom";
import Home from "views/Home";
import Ch01ComponenetDeclaration from "views/Ch01ComponenetDeclaration";
import Ch02JSX from "views/Ch02JSX";
import Ch03PropsAndState from "views/Ch03PropsAndState";
import Ch04LifeCycle from "views/Ch04LifeCycle";

function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ch01" component={Ch01ComponenetDeclaration}/>
      <Route path="/ch02" component={Ch02JSX}/>
      <Route path="/ch03" component={Ch03PropsAndState}/>
      <Route path="/ch04" component={Ch04LifeCycle}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppRoute;