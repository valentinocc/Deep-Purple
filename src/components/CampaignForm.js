import React from 'react';
import { Dropdown, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

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

export default class CampaignForm extends React.Component {
    state = {
        name: '',
        teammates: [],
        tools: [],
        attacks: [],
        start_date: '',
        start_time: '',
        end_date: '',
        end_time: ''
    };
    //update the name variable in component's state when it changes in the field
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onMemberChange = (e) => {
        const teammates = e.target.value;
        this.setState(() => ({ teammates }));
    };
    onToolsChange = (e) => {
        const tools = e.target.value;
        this.setState(() => ({ tools }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            teammates: this.state.teammates,
            tools: this.state.tools,
            attacks: this.state.attacks,
            start_date: this.state.start_date,
            start_time: this.state.start_time,
            end_date: this.state.end_date,
            end_time: this.state.end_time
        });
    };

    handleAddition = (e, { value }) => {
        this.setState((prevState) => ({
          options: [{ text: value, value }, ...prevState.options],
        }))
      }
    
    // handleChange = (e, { value }) => this.setState({ currentValues: value })
    
    render() {
        const { currentValues } = this.state
        // const campaign = {
        //     name: this.state.name,
        //     tools: this.state.tOptions,
        //     attacks: this.state.aOptions,
        //     teammate: this.state.mOptions,
        //     start_time: '',
        //     end_time: '',
        //     chat: [""],
        //     repository_id: ''
        // };
        return (
            <div>
                <script>
                $('#example1').calendar();
                </script>
                {console.log(this.state.mOptions)}
                {console.log(this.state.currentValues)}
                <form class="ui large form" onSubmit={this.onSubmit}>
                    <div class="ui stacked segment">
                        <div class="field">
                        <div class="ui input">
                            {/* <!-- <i class="user icon"></i> --> */}
                            <input 
                                name="name" 
                                placeholder="Campaign Name" 
                                type="text"
                                value={this.state.name}
                                onChange={this.onNameChange}
                                />
                        </div>
                        </div>

                        {/* <!--CAMPAIGN TEAM MEMBERS--> */}
                        <h4 class="ui dividing header">Team Members</h4>
                        <Dropdown
                            options={memberOptions}
                            placeholder='Members'
                            fluid
                            multiple
                            search
                            selection
                            allowAdditions
                            value={this.state.teammates}
                            onAddItem={this.handleAddition}
                            onChange={this.onMemberChange}
                        />
                        {/* <!--CAMPAIGN TOOLS--> */}
                        <h4 class="ui dividing header">Detection Tools</h4>
                        <Dropdown
                            placeholder='Tools'
                            fluid
                            multiple
                            search
                            selection
                            allowAdditions
                            options={toolOptions}
                            value={this.state.tools}
                            onAddItem={this.handleAddition}
                            onChange={this.onToolsChange}
                        />
                        {/* <!--CAMPAIGN ATTACKS--> */}
                        <h4 class="ui dividing header">Attacks</h4>
                        <Dropdown
                            placeholder='Attacks'
                            fluid
                            multiple
                            search
                            selection
                            allowAdditions
                            options={attackOptions}
                            value={this.state.value}
                            onAddItem={this.handleAddition}
                            onChange={this.handleChange}
                        />
                        {/* <!--CAMPAIGN START DATE--> */}
                        <h4 class="ui dividing header">Start Date</h4>
                        <div class="ui calendar" id="example1">
                        <div class="ui input left icon">
                            <i class="calendar icon"></i>
                            <input type="text" placeholder="Date/Time"/>
                        </div>
                        </div>
                        {/* <!--CAMPAIGN DEADLINE--> */}
                        <h4 class="ui dividing header">Deadline</h4>
                        <div class="ui calendar" id="example1">
                        <div class="ui input left icon">
                            <i class="calendar icon"></i>
                            <input type="text" placeholder="Date/Time"/>
                        </div>
                        </div>
                        <h4> </h4>

                        <button class="ui fluid large yellow inverted submit button">Create</button>
                    </div>
                    <div class="ui error message"></div>
                </form>
            </div>
        )
    }
}