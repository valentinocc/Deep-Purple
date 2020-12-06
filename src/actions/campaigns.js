import uuid from 'uuid';
import database from '../firebase/firebase';

export const addCampaign = (campaign) => ({
    type: 'ADD_CAMPAIGN',
    campaign
});

export const startAddCampaign = (campaignData) => {
    return (dispatch) => {
        const {
            name = 'unnamed',
            tools = [],
            attacks = [],
            leader = '',
            teammates = [],
            start_time = '',
            end_time = '',
            chat = [""],
            repository_id = ''
        } = campaignData;
        const campaign = { name, tools, attacks, leader, teammates, start_time, end_time, chat, repository_id};

        database.ref('currentCampaigns').push(campaign).then((ref) => {
            dispatch(addCampaign({
                id: ref.key,
                ...campaign
            }))
        });
    };
};

export const endCampaign = ( campaignID ) => ({
    type: 'END_CAMPAIGN',
    campaignID
});

export const addTool = ({ campaignID, toolName }) => ({
    type: 'ADD_TOOL',
    campaignID,
    toolName
});

export const removeTool = ({ campaignID, toolName }) => ({
    type: 'REMOVE_TOOL',
    campaignID,
    toolName
});