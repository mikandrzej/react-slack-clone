import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./app/components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
