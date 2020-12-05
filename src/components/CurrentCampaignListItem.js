import React from 'react';
import { endCampaign } from '../actions/campaigns';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const ListItem = ({ id, name, tools, dispatch }) => {
    return (
        <div>
            <Header color='white'>{name}</Header>
            <button onClick={() => (
                dispatch(endCampaign(id))
            )}>End Campaign</button>
        </div>
    );
};

export default ListItem;