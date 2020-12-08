import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import { startLogin, startLogout } from '../actions/auth';
import { Link } from 'react-router-dom';
import CampaignForm from './CampaignForm';
import { startAddCampaign, viewCampaign } from '../actions/campaigns';
import { history } from '../routers/AppRouter';

export const AppHeader = ( props ) => (
    <header>
      <style>
          {`
          html, body {
            background: #140730;
          }

        `}
        </style>
        <body>
           {/* <div class="ui large secondary inverted pointing menu" style={{color: '#140730'}}> */}
           <Menu large secondary inverted pointing style={{backgroundColor: "black"}}>
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
             <Dropdown item text='Campaign List'>
             <Dropdown.Menu>
                {props.currentCampaigns.map(( campaign ) => {
                    return <List.Item {...campaign} dispatch={props.dispatch}>
                        <Link to={{pathname: "/campaignstats", state: {theCampaign: campaign}}} 
                              value={campaign}
                              onClick={() => {
                              props.dispatchViewCampaign(campaign);
                            }}>
                            <h4 style={{color: 'black'}}>{campaign.name}</h4>
                        </Link>
                            
                        </List.Item>;
                })}  
                </Dropdown.Menu>
            </Dropdown>   
            <Link to="/campaignconfig"><a class="item">New Campaign</a></Link>
            <Link to="/pastcampaigns"><a class="item">Past Campaigns</a></Link>
            <Link to="/tutorial"><a class="item">Tutorial</a></Link>
            <div class="right item">
            <Link to={{pathname: "/"}} 
                              onClick={() => {
                              props.startLogout();
                            }}><a class="item">Log-In</a></Link>
            </div>
          </Menu>
        </body>
       
    
    </header>
);

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatchNewCampaign: (campaign) => dispatch(startAddCampaign(campaign)),
    dispatchViewCampaign: (campaign) => dispatch(viewCampaign(campaign)),
    startLogout: () => dispatch(startLogout())
  };
};


const mapStateToProps = ( state ) => ({
    currentCampaigns: state.currentCampaigns
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
