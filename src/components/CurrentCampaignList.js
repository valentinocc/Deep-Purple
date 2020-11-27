import React from 'react';
import { connect } from 'react-redux';
import ListItem from './CurrentCampaignListItem';

const CurrentCampaignList = (props) => (
    <div>
        <h1>Campaigns</h1>
        {props.currentCampaigns.length}
        {props.currentCampaigns.map(( campaign ) => {
            return <ListItem key={campaign.id} {...campaign} dispatch={props.dispatch}/>;
        })} 
        {console.log(props)}
    </div>
);

const mapStateToProps = ( state ) => {
    return {
        currentCampaigns: state.currentCampaigns
    };
};

export default connect( mapStateToProps )( CurrentCampaignList );