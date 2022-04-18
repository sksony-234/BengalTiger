import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Logo from '../logo/logo1.png';
import Dot from './Dot';

const Navbar = () => {
  return (
    <>
        <NavbarStyle>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="navList">
                <ul>
                    <li><NavLink to="/" activeClassName="active-class">Home</NavLink></li>
                    <li><NavLink to="#" activeClassName="active-class">Distribution</NavLink></li>
                    <li><NavLink to="#" activeClassName="active-class">Promotion</NavLink></li>
                    <li><NavLink to="#" activeClassName="active-class">Licensing</NavLink></li>
                    <li><NavLink to="#" activeClassName="active-class">Pricing</NavLink></li>
                    <li><NavLink to="#" activeClassName="active-class">FAQ</NavLink></li>
                </ul>
            </div>
            <div className="login">Login</div>
        </NavbarStyle>
    </>
  )
}

export default Navbar;

const NavbarStyle = styled.nav`
    /* position:fixed; */
    /* top:20px; */
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:2rem;
    .logo{
        img{
            width: 250px;
            height: 73px;
        }
    }

    .navList{
        ul{
            display:flex;
            li{
                padding:0px 20px;
            }
            .active-class{
                font-size:1.3rem;
                font-weight:bold;
                color:red;
                background-color:red;
            }
        }
    }
    .login{
    }
`;