import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import Routes from "./components/routing/Routes";
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
