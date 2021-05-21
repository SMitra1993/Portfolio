import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages";
import Signin from "./Pages/signin";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
      </BrowserRouter>
    );
  }
}
export default App;
