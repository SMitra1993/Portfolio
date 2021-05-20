import React, { lazy, Suspense } from "react";
const Loader = lazy(() => import("../Loader/Loader"));

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Suspense fallback={<Loader></Loader>}>
        <div>
          <div>Home</div>
        </div>
      </Suspense>
    );
  }
}
export default Home;
