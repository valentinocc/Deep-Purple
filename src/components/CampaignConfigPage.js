import React from 'react';
import { Dropdown, Button, Form, Grid, Header, Image, Message, Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import appHeader from './appHeader';
import CampaignForm from './CampaignForm';
import { startAddCampaign, viewCampaign } from '../actions/campaigns';
import { history } from '../routers/AppRouter';


const CampaignConfigPage = (props) => (
    <html><head>
    <meta charset="utf-8"/>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=no"/>
    <meta name="description" content="Semantic-UI-Forest, collection of design, themes and templates for Semantic-UI."/>
    <meta name="keywords" content="Semantic-UI, Theme, Design, Template"/>
    <meta name="author" content="PPType"/>
    <meta name="theme-color" content="#ffffff"/>
    <title>Deep Purple Campaign Creation</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" type="text/css"/>
  </head>
  <style>
          {`
          html, body {
            background: #140730;
          }
        `}
        </style>
  <body id="root">
    <div class="ui inverted vertical center aligned segment" style={{backgroundColor: "#bd9f0b"}}>
    
          <Header as="h1">
            Create a New Campaign
          </Header>
            
          <h2>This is where the magic begins...</h2>
          {/* <!-- <div class="ui huge violet button">Get Started <i class="right arrow icon"></i></div> --> */}
    
      </div>
      <h1 class="ui header">
           
      </h1>
      <Grid textAlign='center' style={{ height: '100vh' }}>
    <Grid.Column style={{ maxWidth: 450 }}>
    <div class="ui center aligned grid">
      <div class="column">
        {/* <!-- <h2 class="ui teal center aligned header">
          <img class="image" src="/rootstatic/templates/semantic-ui/login/static/images/logo.png"> New Campaign
        </h2> --> */}
        <CampaignForm
          onSubmit={(campaign) => {
            props.dispatchNewCampaign(campaign);
            history.push('/campaignstats');
            console.log('addCampaign');
          }}
        />
        <div class="ui message">New to campaign creation?<a href="#root"> Guide to a Great Campaign </a></div>
      </div>
    </div>
    </Grid.Column>
    </Grid>
   

  

</body></html>
);

const mapStateToProps = ( state ) => {
    return {
        currentCampaigns: state.currentCampaigns
    };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatchNewCampaign: (campaign) => dispatch(startAddCampaign(campaign)),
    dispatchViewCampaign: (campaign) => dispatch(viewCampaign(campaign))
  };
};

export default connect( mapStateToProps, mapDispatchToProps ) ( CampaignConfigPage );