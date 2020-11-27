import React from 'react';
import { endCampaign } from '../actions/campaigns';

const ListItem = ({ id, name, tools, dispatch }) => {
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={() => (
                dispatch(endCampaign(id))
            )}>End Campaign</button>
        </div>
    );
};

export default ListItem;