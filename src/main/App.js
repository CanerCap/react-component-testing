
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserHistory } from "react-router";
import { MuiThemeProvider } from "material-ui/styles";
import injectTapEventPlugin from "react-tap-event-plugin";

import AppNavBar from "./components/AppNavBar";
import HomePage from "./components/HomePage";
import Catalogue from "./components/CataloguePage";



class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render() {
        let browserHistory = BrowserHistory;
        return (
            <MuiThemeProvider>
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
            </MuiThemeProvider>
        );
    }
}

export default App;
