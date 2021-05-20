import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  }
}
export default App;
