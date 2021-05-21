import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    );
  }
}
export default App;
