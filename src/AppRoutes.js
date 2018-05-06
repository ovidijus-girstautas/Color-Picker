import React from 'react';
import Home from './components/Home';
import Pizza from './components/Pizza';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Drinks from "./components/Drinks";

class AppRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/pizza" component={Pizza} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/drinks" component={Drinks} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;
