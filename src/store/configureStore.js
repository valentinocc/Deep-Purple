import { createStore, combineReducers, applyMiddleware } from 'redux';
import currentCampaignReducer from '../reducers/currentCampaign';
import pastCampaignReducer from '../reducers/pastCampaign';
import viewCampaignReducer from '../reducers/viewCampaign';
import accessTokenReducer from '../reducers/accessToken';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(
        combineReducers({
            currentCampaigns: currentCampaignReducer,
            pastCampaigns: pastCampaignReducer,
            viewCampaign: viewCampaignReducer,
            accessToken: accessTokenReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
};

