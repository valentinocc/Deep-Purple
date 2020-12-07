const pastCampaignReducerDefaultState = [];

export default (state = pastCampaignReducerDefaultState, action) => {
    switch (action.type) {
        case 'STORE_CAMPAIGN':
            return [
                ...state,
                action.pastCampaign
            ];
        default:
            return state;
    }
}