import uuid from 'uuid';

export const addCampaign = (
    {
        tools = [],
        name
    }
) => ({
    type: 'ADD_CAMPAIGN',
    campaign: {
        id: uuid(),
        name,
        tools
    }
});

export const endCampaign = ( campaignID ) => ({
    type: 'END_CAMPAIGN',
    campaignID
});

export const addTool = ({ campaignID, toolName }) => ({
    type: 'ADD_TOOL',
    campaignID,
    tool: {
        toolName,
        attacks: []
    }
});

export const removeTool = ({ campaignID, toolName }) => ({
    type: 'REMOVE_TOOL',
    campaignID,
    toolName
});