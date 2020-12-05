import React from 'react';
import { Button, Dropdown, Form, Grid, Header, Image, Message, Segment, List } from 'semantic-ui-react';

import { connect } from 'react-redux';
import ListItem from './CurrentCampaignListItem';
import { Link } from 'react-router-dom';

const PastCampaignsPage = (props) => (
    <body id="root">
    <div class="ui inverted vertical center aligned segment">

        <div class="ui container">
          <div class="ui large secondary inverted pointing menu">
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <Dropdown item text='Campaign List'>
                <Dropdown.Menu>
                {props.currentCampaigns.map(( campaign ) => {
                    return <List.Item {...campaign} dispatch={props.dispatch}>
                        <Link to={{pathname: "/campaignstats", state: {theCampaign: campaign}}}>
                            <Image avatar src='becky2.jpg'/>
                            <Dropdown.Item>
                               {campaign.name}
                            </Dropdown.Item>
                        </Link>
                            
                        </List.Item>;
                })}  
                </Dropdown.Menu>
            </Dropdown>
            <Link to="/campaignstats"><a class="item">Intermediates Only!</a></Link>
            <Link to="/campaignconfig"><a class="item">New Campaign</a></Link>
            <Link to="/pastcampaigns"><a class="active item">Past Campaigns</a></Link>
            <Link to="/currentcampaigns"><a class="item">Team Stats</a></Link>
            <div class="right item">
            <Link to="/"><a class="ui inverted button">Log in</a></Link>
              <a class="ui inverted button">Sign Up</a>
            </div>
          </div>
        </div>
    
          <h1 class="ui header">
            Past Campaigns
          </h1>
          <h2>Never forget where you came from...</h2>
        </div>
        </body>
);

const mapStateToProps = ( state ) => {
    return {
        currentCampaigns: state.currentCampaigns
    };
};

export default connect( mapStateToProps )( PastCampaignsPage );