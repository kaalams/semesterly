import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SemesterlyContainer from "./redux/ui/containers/semesterly_container";
import CourseEval from "./redux/ui/course_eval";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <SemesterlyContainer />
        </Route>
        <Route path="/course-evaluations">
          <CourseEval />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
