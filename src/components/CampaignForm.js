import React from 'react';

export default class CampaignForm extends React.Component {
    state = {
        name: '',
        teammates: [],
        tools: [],
        attacks: []
    };
    //update the name variable in component's state when it changes in the field
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            name: this.state.name
        });
    };
    render() {
        return (
            <div>
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
                            <input type="text" name="card[expire-year]" maxlength="2" placeholder="Day"/>
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
                            <input type="text" name="card[expire-year]" maxlength="2" placeholder="Day"/>
                        </div>
                        <div class="field">
                            <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>
                        </div>
                        </div>

                        <button class="ui fluid large teal submit button">Create</button>
                    </div>
                    <div class="ui error message"></div>
                </form>
            </div>
        )
    }
}