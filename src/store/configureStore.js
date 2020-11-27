import { createStore, combineReducers } from 'redux';
import currentCampaignReducer from '../reducers/currentCampaign';
import pastCampaignReducer from '../reducers/pastCampaign';
import campaignLogReducer from '../reducers/campaignLog';

export default () => {
    const store = createStore(
        combineReducers({
            currentCampaigns: currentCampaignReducer,
            pastCampaigns: pastCampaignReducer,
            logs: campaignLogReducer
        })
    );

    return store;
};

