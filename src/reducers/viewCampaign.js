const viewCampaignReducerDefaultState = {};

export default (state = viewCampaignReducerDefaultState, action) => {
    switch (action.type) {
        case 'VIEW_CAMPAIGN':
            return {
                ...action.campaign
            };
        default:
            return state;
    }
}