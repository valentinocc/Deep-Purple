import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import AppHeader from './AppHeader';
import leLogo from '../../public/logo.png';
import Login from './Login';

const DashboardPage = (props) => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Image src={leLogo} size='massive' />
        <Header as='h2' color='grey' textAlign='center'>
            Enter your credentials... or somebody else's
        </Header>
        <Login />
        </Grid.Column>
    </Grid>
);
export default DashboardPage;