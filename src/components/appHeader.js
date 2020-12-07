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

export const AppHeader = ({ startLogout }, props) => (
    <header>
        <div class="ui black large secondary inverted pointing menu">
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <Link to="/currentcampaigns">
             <Dropdown item text='Campaign List'>
             <Dropdown.Menu>
                {props.currentCampaigns.map(( campaign ) => {
                    return <List.Item {...campaign} dispatch={props.dispatch}>
                        <Link to={{pathname: "/campaignstats", state: {theCampaign: campaign}}} 
                              data-payloadcampaign={campaign} 
                              onClick={ev => {
                              props.dispatchViewCampaign(ev.currentTarget.dataset.payloadcampaign);
                            }}>
                            <Image avatar src='becky2.jpg'/>
                            <Dropdown.Item>
                               {campaign.name}
                            </Dropdown.Item>
                        </Link>
                            
                        </List.Item>;
                })}  
                </Dropdown.Menu>
            </Dropdown>   
            </Link>
            
            <Link to="/campaignstats"><a class="item">Intermediates Only!</a></Link>
            <Link to="/campaignconfig"><a class="item">New Campaign</a></Link>
            <Link to="/pastcampaigns"><a class="item">Past Campaigns</a></Link>
            <Link to="/currentcampaigns"><a class="item">Team Stats</a></Link>
            <div class="right item">
            <Link to="/currentcampaigns"><Button inverted>Logout</Button></Link>

            </div>
          </div>
    
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
}); 

export default connect(undefined, mapDispatchToProps)(AppHeader);
