import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const campaignReducerDefaultState = [];

const addCampaign = (
    {
        tools = []
    }
) => ({
    type: 'ADD_CAMPAIGN',
    campaign: {
        id: uuid(),
        tools
    }
});

const endCampaign = ( campaignID ) => ({
    type: 'END_CAMPAIGN',
    campaignID
});

const addTool = ({ campaignID, toolName }) => ({
    type: 'ADD_TOOL',
    campaignID,
    tool: {
        toolName,
        attacks: []
    }
});

const removeTool = ({ campaignID, toolName }) => ({
    type: 'REMOVE_TOOL',
    campaignID,
    toolName
});

const currentCampaignReducer = (state = campaignReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CAMPAIGN':
            return [
                ...state,
                action.campaign
            ];
        case 'END_CAMPAIGN':
            return state.filter( ({ id }) => id !== action.campaignID);
        case 'ADD_TOOL':
            return state.map( ( campaign ) => {
                if ( campaign.id === action.campaignID) {
                    return {
                        ...campaign,
                        tools: [
                            ...campaign.tools,
                            action.tool
                        ]
                    }
                }
                else {
                    return {
                        ...campaign
                    }
                }
            });
        case 'REMOVE_TOOL':
            return state.map( ( campaign ) => {
                if (campaign.id === action.campaignID) {
                    return {
                        ...campaign,
                        tools: campaign.tools.filter( ({ toolName }) => toolName !== action.toolName)
                    }
                }
                else {
                    return {
                        ...campaign
                    }
                }
            });
        default:
            return state;
    }
}

const campaignLogReducerDefaultState = [];

const campaignLogReducer = (state = campaignLogReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const pastCampaignReducerDefaultState = [];

const pastCampaignReducer = (state = pastCampaignReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        currentCampaigns: currentCampaignReducer,
        pastCampaigns: pastCampaignReducer,
        logs: campaignLogReducer
    })
)

store.subscribe(() => {
    console.log(store.getState());
});

const camp1 = store.dispatch(addCampaign({}));
const camp2 = store.dispatch(addCampaign({}));
store.dispatch(addTool({ campaignID: camp1.campaign.id, toolName: 'FowlFoolery' }));
store.dispatch(addTool({ campaignID: camp1.campaign.id, toolName: 'PSyche' }));
store.dispatch(removeTool({ campaignID: camp1.campaign.id, toolName: 'FowlFoolery' }));
store.dispatch(endCampaign( camp1.campaign.id ));