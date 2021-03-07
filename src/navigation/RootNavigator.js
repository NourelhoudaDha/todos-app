import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectConnect } from "../features/auth/AuthSlice";
import Auth from "../features/auth/Auth";
import Todos from "../features/todos/Todos";

export default function App() {
  const auth = useSelector(selectConnect);
  return (
    <Router>
      <div>
        <Switch>
          {auth.connected === true && (
            <Route>
              <Todos />
            </Route>
          )}

          <Route>
            <Auth />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
