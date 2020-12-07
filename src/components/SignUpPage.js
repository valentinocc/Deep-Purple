import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import appHeader from './appHeader';
import leLogo from '../../public/logo.png';


export default class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }
    state = {
        value: "novice"
    }
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
           <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header size="huge" color="yellow" textAlign="center">Deep Purple Sign-Up</Header>
    <Image src={leLogo} size='large' />
      <Header as='h2' color='grey' textAlign='center'>
        Welcome new recruit, we just need a bit of personal info from you...
      </Header>
      <Form inverted size='large'>
        <Segment inverted stacked>
            <h4 color="yellow">GitHub username (you will use this account to sign in)</h4>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='GitHub username' />
          <h4 color="yellow">Password (something they won't guess and you won't forget)</h4>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
        <h4 color="blue">Experience</h4>
        <Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Group inline>
          <Form.Radio
            label='I am basically color-blind'
            value='novice'
            checked={value === 'novice'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='I know my way around some security tools'
            value='intermediate'
            checked={value === 'intermediate'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='I have completed several campaigns before'
            value='expert'
            checked={value === 'expert'}
            onChange={this.handleChange}
          />
        </Form.Group>
          <Link to="/currentcampaigns"><Button inverted color='violet' fluid size='large'>Submit</Button></Link>
          
          
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>  
        )
       
    }
  
}