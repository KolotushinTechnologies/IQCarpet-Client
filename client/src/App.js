import './App.css';
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from "./components/homePage/index"
import store from './store';

function App() {
    return (
        <Provider store={store}>
              <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
              </Router>
        </Provider>
    );
}

export default App;
