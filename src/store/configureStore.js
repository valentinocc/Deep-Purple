import { createStore, combineReducers, applyMiddleware } from 'redux';
import currentCampaignReducer from '../reducers/currentCampaign';
import pastCampaignReducer from '../reducers/pastCampaign';
import campaignLogReducer from '../reducers/campaignLog';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(
        combineReducers({
            currentCampaigns: currentCampaignReducer,
            pastCampaigns: pastCampaignReducer,
            logs: campaignLogReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
};

