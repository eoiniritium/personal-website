import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Github, Instagram, Linkedin } from './widgets/icons.js';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm box-shadow mb-3" light id='header-navbar'>
          <NavbarBrand tag={Link} to="/" className="text-light" id='header-title'>Eoin.</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow" id='links'>
              <NavItem>
                <NavLink tag={Link} className="text-light" id='link' to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" id='link' to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" id='link' to="/fetch-data">Fetch data</NavLink>
              </NavItem>
              <NavItem>
                            <NavLink tag={Link} className="text-light" id='link' to='https://www.linkedin.com/in/eoin-mag-ualghairg-12485722b/'>
                    <Linkedin/>
                </NavLink>
              </NavItem>
              <NavItem>
                            <NavLink tag={Link} className="text-light" id='link' to='https://github.com/eoiniritium'>
                    <Github/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" id='link' to='https://www.instagram.com/eoiniritium/'>
                    <Instagram/>
                </NavLink>
              </NavItem>
              
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
