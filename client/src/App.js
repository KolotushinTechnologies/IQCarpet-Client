// Import Engine
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import Routes from "./components/routing/Routes";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
