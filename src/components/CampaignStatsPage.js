import React from 'react';
import { Button, Dropdown, List, Form, Menu, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const CampaignStatsPage = (props) => (
  
    <html>
        <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Campaign Dashboard</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
      integrity="sha256-9mbkOfVho3ZPXfM7W8sV2SndrGDuh7wuyLjtsWeTI1Q="
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <style>
          {`
          html, body {
            background: #140730;
          }
        `}
        </style>
  <body>
    <div class="ui inverted vertical center aligned segment">
    
    {props.currentCampaigns.map(( campaign ) => {
            return <Header as="h1" {...campaign}>
              {campaign.name}
              </Header>
    })}
          {/* <h1 class="ui header">
          Intermediates Only!
          </h1> */}
          <h2>Dashboard</h2>
    
      </div>


    <div class="pusher">
      <div class="main-content">
        <div class="ui grid stackable padded">
          <div
            class="four wide computer eight wide tablet sixteen wide mobile column"
          >
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header red">
                  <i class="icon shopping cart"></i>
                </div>
                <div class="header">
                  <div class="ui red header">
                    24
                  </div>
                </div>
                <div class="meta">
                  exploits
                </div>
                <div class="description">
                  There have been 24 exploits discovered so far from 5 of 8 members, and 2 of 3 tools; 7 have not been mitigated
                </div>
              </div>
              <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui red button">More Info</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="four wide computer eight wide tablet sixteen wide mobile column"
          >
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header green">
                  <i class="icon clock"></i>
                </div>
                <div class="header">
                  <div class="ui header green">56</div>
                </div>
                <div class="meta">
                  minutes
                </div>
                <div class="description">
                  Average time for attacks to be identified by any tool, not including transit time between server and application
                </div>
              </div>
              <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui green button">More Info</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="four wide computer eight wide tablet sixteen wide mobile column"
          >
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header teal">
                  <i class="icon briefcase"></i>
                </div>
                <div class="header">
                  <div class="ui teal header">17</div>
                </div>
                <div class="meta">
                  mitigations
                </div>
                <div class="description">
                  Number of solutions the team has found to mitigate identified exploits, submitted with explanations of implementation
                </div>
              </div>
              <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui teal button">More Info</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="four wide computer eight wide tablet sixteen wide mobile column"
          >
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header purple">
                  <i class="icon trophy"></i>
                </div>
                <div class="header">
                  <div class="ui purple header">4</div>
                </div>
                <div class="meta">
                  badges
                </div>
                <div class="description">
                  Badges awarded to the team for various exceptional skills in completing the purple teaming process
                </div>
              </div>
              <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui purple button">More Info</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ui grid">
            <div
              class="eight wide mobile column"
            >
              <div class="ui fluid card">
                <div class="content">
                    <div class="ui comments">
                        <h3 class="ui dividing header">Collaboration</h3>
                        <div class="comment">
                        <a class="avatar">
                            <img src="becky2.jpg"/>
                        </a>
                        <div class="content">
                            <a class="author">Mallory</a>
                            <div class="metadata">
                            <span class="date">Today at 5:42PM</span>
                            </div>
                            <div class="text">
                            Added Nikto and BEef to the server for anyone else working on attack #4!
                            </div>
                            <div class="actions">
                            <a class="reply">Reply</a>
                            </div>
                        </div>
                        </div>
                        <div class="comment">
                        <a class="avatar">
                            <img src="john1.jpg"/>
                        </a>
                        <div class="content">
                            <a class="author">Elliot Fu</a>
                            <div class="metadata">
                            <span class="date">Yesterday at 12:30AM</span>
                            </div>
                            <div class="text">
                            <p>Stuck on how to mitigate the web attack, anyone got ideas?</p>
                            </div>
                            <div class="actions">
                            <a class="reply">Reply</a>
                            </div>
                        </div>
                        <div class="comments">
                            <div class="comment">
                            <a class="avatar">
                                <img src="becky1.jpg"/>
                            </a>
                            <div class="content">
                                <a class="author">Jenny Hess</a>
                                <div class="metadata">
                                <span class="date">Just now</span>
                                </div>
                                <div class="text">
                                I uploaded a mitigation earlier that might help!
                                </div>
                                <div class="actions">
                                <a class="reply">Reply</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="comment">
                        <a class="avatar">
                            <img src="john2.jpg"/>
                        </a>
                        <div class="content">
                            <a class="author">Joe Henderson</a>
                            <div class="metadata">
                            <span class="date">5 days ago</span>
                            </div>
                            <div class="text">
                            Congrats on the "Caffeine Fiend" badge guys! Keep up the good work!
                            </div>
                            <div class="actions">
                            <a class="reply">Reply</a>
                            </div>
                        </div>
                        </div>
                        <form class="ui reply form">
                        <div class="field">
                            <textarea></textarea>
                        </div>
                        <div class="ui blue labeled submit icon button">
                            <i class="icon edit"></i> Add Reply
                        </div>
                        </form>
                    </div>
                    </div>

                    </div>
                </div>
                <div class="eight wide mobile column">
                    <div class="ui fluid card">
                        <div class="content">
                                <table class="ui celled striped table">
                                  <thead>
                                    <tr>
                                      <th colspan="3">
                                        Team Git Repository
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="collapsing">
                                        <i class="folder icon"></i> attack_scripts
                                      </td>
                                      <td>reverse shell scripting circumvents basic firewalls</td>
                                      <td class="right aligned collapsing">10 hours ago</td>
                                    </tr>
                                    <tr>
                                      <td><i class="folder icon"></i> mitigations</td>
                                      <td>new solution to credential threats using open source CLL</td>
                                      <td class="right aligned">33 minutes ago</td>
                                    </tr>
                                    <tr>
                                      <td><i class="folder icon"></i> server</td>
                                      <td>put Nikto and BEef on server for mitigation use</td>
                                      <td class="right aligned">5 hours ago</td>
                                    </tr>
                                    <tr>
                                      <td><i class="file outline icon"></i> startup.sh</td>
                                      <td>server startup to include latest kali tools</td>
                                      <td class="right aligned">2 hours ago</td>
                                    </tr>
                                    <tr>
                                      <td><i class="file outline icon"></i> REPORT.md</td>
                                      <td>Initial commit</td>
                                      <td class="right aligned">10 hours ago</td>
                                    </tr>
                                  </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="ui grid stackable padded">
          <div
            class="four wide computer eight wide tablet sixteen wide mobile  center aligned column"
          >
            <div class="ui teal statistic">
              <div class="value">
                57
              </div>
              <div class="label" style={{color: "white"}}>
                Downloads
              </div>
            </div>
          </div>
          <div
            class="four wide computer eight wide tablet sixteen wide mobile  center aligned column"
          >
            <div class="ui purple statistic">
              <div class="value">
                17
              </div>
              <div class="label" style={{color: "white"}}>
                Purple Teamers
              </div>
            </div>
          </div>
          <div
            class="four wide computer eight wide tablet sixteen wide mobile  center aligned column"
          >
            <div class="ui green statistic">
              <div class="value">
                100+
              </div>
              <div class="label" style={{color: "white"}}>
                Commits
              </div>
            </div>
          </div>
          <div
            class="four wide computer eight wide tablet sixteen wide mobile  center aligned column"
          >
            <div class="ui purple statistic">
              <div class="value">
                200+
              </div>
              <div class="label" style={{color: "white"}}>
                Cups of Coffee
              </div>
          </div>
          
        </div>
        
    </div>
    <div class="ui center aligned grid">
            <div class="ui message">Found a bug?<a href="#root"> Report it to us here! </a></div>
        </div>
    </div>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"
      integrity="sha256-t8GepnyPmw9t+foMh3mKNvcorqNHamSKtKRxxpUEgFI="
      crossorigin="anonymous"
    ></script>
    <script src="./js/script.js"></script>
  </body>
    </html>
);

const mapStateToProps = ( state ) => {
    return {
        currentCampaigns: state.currentCampaigns,
        campaignView: state.viewCampaign
    };
};

export default connect( mapStateToProps )( CampaignStatsPage );