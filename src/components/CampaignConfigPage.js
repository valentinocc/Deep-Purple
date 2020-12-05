import React from 'react';
import { Dropdown, Button, Form, Grid, Header, Image, Message, Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CampaignConfigPage = (props) => (
    <html><head>
    <meta charset="utf-8"/>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=no"/>
    <meta name="description" content="Semantic-UI-Forest, collection of design, themes and templates for Semantic-UI."/>
    <meta name="keywords" content="Semantic-UI, Theme, Design, Template"/>
    <meta name="author" content="PPType"/>
    <meta name="theme-color" content="#ffffff"/>
    <title>Login Template for Semantic-UI</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" type="text/css"/>
    {/* <style type="text/css">
      body {
        background-color: #dadada;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: grayscale;
      }

      body > .ui.grid {
        height: 100%;
      }

      .column {
        max-width: 450px;
      }
    </style> */}
  </head>

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
             <div class="ui fluid multiple search selection dropdown">
               <input type="hidden" name="receipt"/>
               <i class="dropdown icon"></i>
               <div class="default text">Registered Members</div>
               <div class="menu">
                 <div class="item" data-value="jenny" data-text="Jenny">
                   <img class="ui mini avatar image" src="easy.PNG"/>
                   Jenny Hess
                 </div>
                 <div class="item" data-value="elliot" data-text="Elliot">
                   <img class="ui mini avatar image" src="/images/avatar/small/elliot.jpg"/>
                   Elliot Fu
                 </div>
                 <div class="item" data-value="stevie" data-text="Stevie">
                   <img class="ui mini avatar image" src="/images/avatar/small/stevie.jpg"/>
                   Stevie Feliciano
                 </div>
                 <div class="item" data-value="christian" data-text="Christian">
                   <img class="ui mini avatar image" src="/images/avatar/small/christian.jpg"/>
                   Christian
                 </div>
                 <div class="item" data-value="matt" data-text="Matt">
                   <img class="ui mini avatar image" src="/images/avatar/small/matt.jpg"/>
                   Matt
                 </div>
                 <div class="item" data-value="justen" data-text="Justen">
                   <img class="ui mini avatar image" src="/images/avatar/small/justen.jpg"/>
                   Justen Kitsune
                 </div>
               </div>
             </div>
           </div>
            {/* <!--CAMPAIGN TOOLS--> */}
            <h4 class="ui dividing header">Detection Tools</h4>
            <div class="inline field">
                <div class="ui toggle checkbox">
                  <input type="checkbox" tabindex="0" class="hidden"/>
                  <label>Amass Network Scanner</label>
                </div>
              </div>
            <div class="inline field">
                <div class="ui toggle checkbox">
                  <input type="checkbox" tabindex="0" class="hidden"/>
                  <label>Command Line Logger</label>
                </div>
              </div>
            <div class="inline field">
                <div class="ui toggle checkbox">
                  <input type="checkbox" tabindex="0" class="hidden"/>
                  <label>BurpSuite</label>
                </div>
              </div>
            {/* <!--CAMPAIGN ATTACKS--> */}
            <h4 class="ui dividing header">Attacks</h4>
            <div class="inline field">
                <div class="ui toggle checkbox">
                  <input type="checkbox" tabindex="0" class="hidden"/>
                  <label>Command-Line Credential Attack</label>
                </div>
              </div>
            <div class="inline field">
                <div class="ui toggle checkbox">
                  <input type="checkbox" tabindex="0" class="hidden"/>
                  <label>Reverse Shell Attack</label>
                </div>
              </div>
            <div class="inline field">
                <div class="ui toggle checkbox">
                  <input type="checkbox" tabindex="0" class="hidden"/>
                  <label>Web App Privilege Escalation Attack</label>
                </div>
              </div>
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
   

  

</body></html>
);

const mapStateToProps = ( state ) => {
    return {
        currentCampaigns: state.currentCampaigns
    };
};

export default connect( mapStateToProps ) ( CampaignConfigPage );