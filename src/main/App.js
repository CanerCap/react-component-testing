
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import createHistory from 'history/createBrowserHistory';


import AppNavBar from "./components/AppNavBar";
import HomePage from "./components/HomePage";
import Catalogue from "./components/CataloguePage";



class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let browserHistory = createHistory;
        return (
            <div>
                <Router history={browserHistory}>
                    <div>
                        <AppNavBar />
                        <Route
                            path="/"
                            exact
                            render={props => (
                                <HomePage />
                            )}
                        />

                        <Route
                            path="/page2"
                            exact
                            render={props => (
                                <Catalogue />
                            )}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
