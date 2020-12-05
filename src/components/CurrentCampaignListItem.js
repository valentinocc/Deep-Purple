import React from 'react';
import { endCampaign } from '../actions/campaigns';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const ListItem = ({ id, name, tools, dispatch }) => {
    return (
        <Grid textAlign='center' style={{ height: '20vh'}} color='white' verticalAlign='middle'>
        <Grid.Column color='white' style={{ maxWidth: 450 }}>
            <div>
                <Header>{name}</Header>
                <button onClick={() => (
                    dispatch(endCampaign(id))
                )}>End Campaign</button>
            </div>
        </Grid.Column>
        </Grid>
    );
};

export default ListItem;