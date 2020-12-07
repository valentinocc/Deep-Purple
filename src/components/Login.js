import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

export const Login = ({ startLogin }) => (
    <div>
        <Button inverted color='violet' fluid size='large' onClick={startLogin}>Enter</Button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);