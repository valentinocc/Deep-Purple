import React from 'react';
import { Dropdown, Button, Form, Grid, Header, Image, Message, Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import appHeader from './appHeader';


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
    <div class="ui inverted vertical center aligned segment">

        <div class="ui container">
          <appHeader />
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
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui input">
                {/* <!-- <i class="user icon"></i> --> */}
                <input name="name" placeholder="Campaign Name" type="text"/>
              </div>
            </div>

            {/* <!--CAMPAIGN TEAM MEMBERS--> */}
            <h4 class="ui dividing header">Team Members</h4>
            <div class="field">
             <Dropdown
              placeholder='Members'
              fluid
              multiple
              search
              selection
              options={memberOptions}
            />
           </div>
            {/* <!--CAMPAIGN TOOLS--> */}
            <h4 class="ui dividing header">Detection Tools</h4>
            <Dropdown
              placeholder='Tools'
              fluid
              multiple
              search
              selection
              options={toolOptions}
            />
            {/* <!--CAMPAIGN ATTACKS--> */}
            <h4 class="ui dividing header">Attacks</h4>
            <Dropdown
              placeholder='Attacks'
              fluid
              multiple
              search
              selection
              options={attackOptions}
            />
            {/* <!--CAMPAIGN START DATE--> */}
            <h4 class="ui dividing header">Start Date</h4>
            <div class="three fields">
            <div class="field">
                <select class="ui fluid search dropdown" name="card[expire-month]">
                  <option value="">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div class="field">
                <input type="text" name="card[expire-year]" maxlength="2" placeholder="Date"/>
              </div>
              <div class="field">
                <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>
              </div>
            </div>
            {/* <!--CAMPAIGN DEADLINE--> */}
            <h4 class="ui dividing header">Deadline</h4>
            <div class="three fields">
            <div class="field">
                <select class="ui fluid search dropdown" name="card[expire-month]">
                  <option value="">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div class="field">
                <input type="text" name="card[expire-year]" maxlength="2" placeholder="Date"/>
              </div>
              <div class="field">
                <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>
              </div>
            </div>

            <div class="ui fluid large teal submit button">Create</div>
          </div>
          <div class="ui error message"></div>
        </form>
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

export default connect( mapStateToProps ) ( CampaignConfigPage );