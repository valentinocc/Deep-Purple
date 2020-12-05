import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addCampaign } from './actions/campaigns';
import 'normalize.css/normalize.css'
import './firebase/firebase';
import { firebase } from './firebase/firebase';

const store = configureStore();

const camp1 = store.dispatch(addCampaign({name: 'first step'}));
const camp2 = store.dispatch(addCampaign({name: 'pooper'}));

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('logged in');
    }
    else {
        history.push('/');
    }
});