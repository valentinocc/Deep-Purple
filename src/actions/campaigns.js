import database, { firebase } from '../firebase/firebase';

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
            teammates = [],
            start_time = '',
            end_time = '',
            chat = [""],
            repository_id = ''
        } = campaignData;
        const { displayName, email, uid } = firebase.auth().currentUser;
        const leader = { displayName, email, uid }
        const campaign = { name, tools, attacks, leader, teammates, start_time, end_time, chat, repository_id};

        database.ref('currentCampaigns').push(campaign).then((ref) => {
            dispatch(addCampaign({
                id: ref.key,
                ...campaign
            }));
            dispatch(viewCampaign({
                id: ref.key,
                ...campaign
            }));
        });
    };
};

export const endCampaign = ( id ) => ({
    type: 'END_CAMPAIGN',
    id
});

export const storeCampaign = ( pastCampaign) => ({
    type: 'STORE_CAMPAIGN',
    pastCampaign
});

export const startEndCampaign = (campaignData, leader_notes, grade ) => {
    return (dispatch) => {

        const campaign = { ...campaignData, leader_notes, grade };

        database.ref('currentCampaigns/${campaign.id}').remove().then((ref) => {
            dispatch(endCampaign(campaign.id));
        });

        database.ref('pastCampaigns').push(campaign).then((ref) => {
            dispatch(storeCampaign({
                ...campaign
            }));
        });
    };
};

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

export const viewCampaign = (campaign) => ({
    type: 'VIEW_CAMPAIGN',
    campaign
});

export const setCampaigns = (campaigns) => ({
    type: 'SET_CAMPAIGNS',
    campaigns
});

export const startSetCampaigns = () => {
    return (dispatch) => {
        return database.ref('currentCampaigns').once('value').then((snapshot) => {
            const campaigns = [];
            const user = firebase.auth().currentUser;

            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.leader) {
                    if (user.uid === childSnapshot.leader.uid) {
                        campaigns.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        })
                    }
                }
                
                else {
                    if (childSnapshot.teammates) {
                        childSnapshot.teammates.forEach((teammate) => {
                            if (user.uid === teammate.uid) {
                                campaigns.push({
                                    id: childSnapshot.key,
                                    ...childSnapshot.val()
                                })
                                return;
                            }
                        });
                    }
                    
                }
            });

            dispatch(setCampaigns(campaigns));
        });
    };
};