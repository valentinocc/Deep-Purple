const campaignReducerDefaultState = [];

export default (state = campaignReducerDefaultState, action) => {
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