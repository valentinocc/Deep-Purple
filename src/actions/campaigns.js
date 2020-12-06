import uuid from 'uuid';

export const addCampaign = (
    {
        name = "unnamed",
        tools = [],
        attacks = [],
        leader,
        teammates = [],
        startTime,
        endTime,
        chat = [],
        repositoryID = ""
    }
) => ({
    type: 'ADD_CAMPAIGN',
    campaign: {
        id: uuid(),
        name,
        tools,
        attacks,
        leader,
        teammates,
        startTime,
        endTime,
        chat,
        repositoryID
    }
});

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