import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import "./style.scss";
import "antd/dist/antd.css";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
