import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addCampaign, startAddCampaign, startSetCampaigns } from './actions/campaigns';
import 'normalize.css/normalize.css'
import './firebase/firebase';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(startSetCampaigns()).then(() => {
            renderApp();
        });
        if (history.location.pathname === '/') {
            history.push('/currentcampaigns')
        }
        console.log(user);
    }
    else {
        renderApp();
        history.push('/');
    }
});