import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Divider,
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
<<<<<<< HEAD
import { connect } from 'react-redux';
const appHeader = (props) => (
    <header>
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
=======
import { startLogin, startLogout } from '../actions/auth';

export const AppHeader = ({ startLogout }) => (
    <header>
        <h1>Deep Purple</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            
        </div>
        <div>
            <button onClick={startLogout}>Logout</button>
>>>>>>> main
        </div>
    
    </header>
);

<<<<<<< HEAD
const mapStateToProps = ( state ) => {
    return {
        currentCampaigns: state.currentCampaigns
    };
};

export default connect( mapStateToProps )( appHeader );
=======
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
}); 

export default connect(undefined, mapDispatchToProps)(AppHeader);
>>>>>>> main
