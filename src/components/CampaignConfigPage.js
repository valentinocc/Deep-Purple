import React from 'react';
import { Dropdown, Button, Form, Grid, Header, Image, Message, Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CampaignForm from './CampaignForm';
import { startAddCampaign, viewCampaign } from '../actions/campaigns';
import { history } from '../routers/AppRouter';


const memberOptions = [
  { key: 'emily', text: 'Emily', value: 'emily' },
  { key: 'john', text: 'John', value: 'john' },
  { key: 'jacob', text: 'Jacob', value: 'jacob' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'schmidt', text: 'Schmidt', value: 'schmidt' },
  { key: 'cece', text: 'Cece', value: 'cece' },
  { key: 'jess', text: 'Jess', value: 'jess' },
  { key: 'nick', text: 'Nick', value: 'nick' },
  { key: 'zach', text: 'Zacb', value: 'zach' },
  { key: 'cyan', text: 'Cyan', value: 'cyan' },
  { key: 'dylan', text: 'Dylan', value: 'dylan' },
  { key: 'gabby', text: 'Gabby', value: 'gabby' }
]

const toolOptions = [
  { key: 'amass network scanner', text: 'Amass Network Scanner', value: 'amass' },
  { key: 'command line logger', text: 'Command Line Logger', value: 'cll' },
  { key: 'burpsuite', text: 'BurpSuite', value: 'bs' },
  { key: 'nikta', text: 'Nikta', value: 'nikta' },
  { key: 'john the ripper', text: 'John the Ripper', value: 'john the ripper' },
  { key: 'netcat', text: 'Netcat', value: 'netcat' }
]
const attackOptions = [
  { key: 'credential attack', text: 'Credential Attack', value: 'credAttack' },
  { key: 'reverse shell attack', text: 'Reverse Shell Attack', value: 'revShell' },
  { key: 'web application privilege escalation', text: 'Web App Privilege Escalation Attack', value: 'wap' },
  { key: 'lateral movement', text: 'Lateral Movement Attack', value: 'ember' }
]
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

  <body id="root">
    {console.log(props.accessToken)}
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
                        <Link to={{pathname: "/campaignstats", state: {theCampaign: campaign}}}
                              value={campaign}
                              onClick={() => {
                              props.dispatchViewCampaign(campaign);
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
            <Link to="/campaignstats"><a class="item">Intermediates Only!</a></Link>
            <Link to="/campaignconfig"><a class="active item">New Campaign</a></Link>
            <Link to="/pastcampaigns"><a class="item">Past Campaigns</a></Link>
            <Link to="/currentcampaigns"><a class="item">Team Stats</a></Link>
            <div class="right item">
            <Link to="/"><a class="ui inverted button">Log in</a></Link>
              <a class="ui inverted button">Sign Up</a>
            </div>
          </div>
        </div>

          <h1 class="ui header">
            Create a New Campaign
          </h1>
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
            props.dispatchNewCampaign(campaign, props.accessToken);
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
        currentCampaigns: state.currentCampaigns,
        accessToken: state.accessToken
    };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatchNewCampaign: (campaign, accessToken) => dispatch(startAddCampaign(campaign, accessToken)),
    dispatchViewCampaign: (campaign) => dispatch(viewCampaign(campaign))
  };
};

export default connect( mapStateToProps, mapDispatchToProps ) ( CampaignConfigPage );
