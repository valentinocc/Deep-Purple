import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import appHeader from './appHeader';
import leLogo from 'C:/Users/violi/OneDrive/Documents/GitHub/Deep-Purple/public/logo.png';

const DashboardPage = (props) => (
  
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header size="huge" color="yellow" textAlign="center">Deep Purple</Header>
    <Image src={leLogo} size='massive' />
      <Header as='h2' color='grey' textAlign='center'>
        Enter your credentials... or somebody else's
      </Header>
      <Form inverted size='large'>
      {console.log(props)}
        <Segment inverted stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          
          <Link to="/currentcampaigns"><Button inverted color='yellow' fluid size='large'>Login</Button></Link>
          
          
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default DashboardPage