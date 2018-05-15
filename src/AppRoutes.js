import React from 'react';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import LogIn from "./components/LogIn";
import Statistics from "./components/Statistics";


class AppRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/color/:color" component={Home} />
                        <Route path="/quiz" component={Quiz} />
                        <Route path="/log-in" component={LogIn} />
                        <Route path="/statistics" component={Statistics} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;
