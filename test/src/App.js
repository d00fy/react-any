import React from "react";
import "./App.css";
import history from "../src/history";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";

import { Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>心理テスト</h1>
      </div>
      <main>
        <Router history={history}>
          <Route path="/" component={Page1} exact></Route>
          <Route path="/2" component={Page2}></Route>
          <Route path="/3" component={Page3}></Route>
        </Router>
      </main>
    </>
  );
}

export default App;
