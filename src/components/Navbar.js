import React, { Component } from 'react'
import {Link} from 'react-router-dom';
//import logo from '../logo.svg';
import star from './../img/star.jpg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                  <img width="100px" height="100px" src={star} alt="store" className="navbar-brand" />
               </Link> 
               {/* <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Shopping
                    </Link>
                 </li>
               </ul> */}
                <label width="500px" color="red">Search:</label>    
               <input type="text"></input>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">my cart</i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;