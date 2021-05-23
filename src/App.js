import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages";
import contact from "./Pages/contact";
import Loader from "./Pages/loader";
import thankyou from "./Pages/thankyou";

class App extends React.Component {
  state = { loading: true };
  componentDidMount() {
    this.interval = setTimeout(
      () =>
        this.setState({
          loading: false,
        }),
      3000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    if (this.state.loading) return <Loader />;
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
