import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import "normalize.css";
import './sass/main.scss';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers /*, applyMiddleware */} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import navReducer from "./reducers/navReducer";

const rootReducer = combineReducers({
    nav: navReducer,
})

const store = createStore(rootReducer, composeWithDevTools(
    // applyMiddleware(...middleware),
    // other store enhancers if any
));

// console.log(store.getState());

// import me from './playground/default-exports';
// import {food, getInfo} from './playground/named-exports';
// import { food as maistas } from './playground/named-exports';
// import * as all from './playground/named-exports'; --- iskviesti naudojant all.pavadinimas



ReactDOM.render(
<Provider store={store}>
    <AppRoutes />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
