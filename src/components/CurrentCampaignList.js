import React, { Component } from 'react';
import { Button, Dropdown, Form, Grid, Header, Image, Icon, Message, Segment, List } from 'semantic-ui-react';

import { connect } from 'react-redux';
import ListItem from './CurrentCampaignListItem';
import { Link } from 'react-router-dom';
import { endCampaign } from '../actions/campaigns';

const CurrentCampaignList = (props, dispatch, id, name, tools) => (
    <html>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
        </head>
        <div class="ui container">
          <div class="ui large secondary inverted pointing menu">
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <Dropdown active item text='Campaign List'>
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
            <Link to="/pastcampaigns"><a class="item">Past Campaigns</a></Link>
            <Link to="/currentcampaigns"><a class="item">Team Stats</a></Link>
            <div class="right item">
            <Link to="/"><a class="ui inverted button">Log in</a></Link>
              <a class="ui inverted button">Sign Up</a>
            </div>
          </div>
        </div>
    <Grid textAlign='center' style={{ height: '100vh', color: 'white' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
        <h1 color="yellow">{props.currentCampaigns.length} Campaigns</h1>
        <List selection animated size='massive'>
           {props.currentCampaigns.map(( campaign ) => {
            return <List.Item {...campaign} dispatch={props.dispatch} onClick={console.log(campaign.name)}>
                
                    <Image avatar src='becky2.jpg'/>
                    <List.Content>
                    <Link to={{pathname: "/campaignstats", state: {theCampaign: campaign}}}>
                        <h2 color="white">{campaign.name}</h2>
                        <h2 />
                    </Link>    
                        {/* <Link to={{pathname: "/campaignconfig"}}>
                            <Button icon='edit' color='gray'/>   
                        </Link>
                        <Link to={endCampaign}>
                         <Button icon='trash alternate' color='red'/>   
                        </Link> */}

                        <Button.Group>
                            <Link to={{pathname: "/campaignedit"}}>
                                <Button>Edit</Button>
                            </Link>
                            <Button.Or />
                            {/* <Link to={dispatch(endCampaign(id))}> */}
                               <Button negative>Delete</Button> 
                            {/* </Link> */}
                            
                        </Button.Group>
                        
                    </List.Content>
                
                    
                </List.Item>;
        })}  
        </List>
        
        {/* {props.currentCampaigns.map(( campaign ) => {
            return <ListItem style={{ color: 'white' }} key={campaign.id} {...campaign} dispatch={props.dispatch}/>;
        })} 
        {console.log(props)} */}
    </Grid.Column>
    </Grid>
    </html>
);

const mapStateToProps = ( state ) => {
    return {
        currentCampaigns: state.currentCampaigns
    };
};

export default connect( mapStateToProps )( CurrentCampaignList );