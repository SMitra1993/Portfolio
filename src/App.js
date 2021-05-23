import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages";
import contact from "./Pages/contact";
import thankyou from "./Pages/thankyou";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AnimatePresence>
          <Route key="home" exact path="/" component={Home} />
          <Route key="contact" exact path="/contact" component={contact} />
          <Route key="thankyou" exact path="/thankyou" component={thankyou} />
        </AnimatePresence>
      </BrowserRouter>
    );
  }
}
export default App;
