import React from "react";
import Homepage from "./components/pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "./components/components/Additional/Button/Button";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/button" component={Button} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
