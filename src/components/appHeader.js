import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import { startLogin, startLogout } from '../actions/auth';

export const AppHeader = ({ startLogout }) => (
    <header>
        <h1>Deep Purple</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            
        </div>
        <div>
            <button onClick={startLogout}>Logout</button>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
}); 

export default connect(undefined, mapDispatchToProps)(AppHeader);