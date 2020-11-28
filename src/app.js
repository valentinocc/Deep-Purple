import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addCampaign } from './actions/campaigns';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const camp1 = store.dispatch(addCampaign({name: 'first step'}));
const camp2 = store.dispatch(addCampaign({name: 'pooper'}));

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));