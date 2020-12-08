const pastCampaignReducerDefaultState = [];

export default (state = pastCampaignReducerDefaultState, action) => {
    switch (action.type) {
        case 'STORE_CAMPAIGN':
            return [
                ...state,
                action.pastCampaign
            ];
        case 'SET_PAST_CAMPAIGNS':
            return action.pastCampaigns;
        default:
            return state;
    }
}