import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
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

const appHeader = () => (
    <header>
        <h1>Deep Purple</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        </div>
    </header>
);

export default appHeader;