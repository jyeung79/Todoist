import React from 'react';
import styled from 'styled-components';
import { MdInvertColors } from 'react-icons/md'
import BaseStyles from '../../styles/styles';

const StyledHeader = styled('header')`
    border-bottom: solid 1px #ca2100;
    background-color: ${BaseStyles.generic_bg};
    -webkit-transition: height 200ms ease-in;
    transition: height 200ms ease-in;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    height: 44px;
    z-index: 400;
    position: fixed;
    top: 0;
    width: 100%;

    font-size: 13px;
    margin-bottom: 20px;
    float: left;
`;

const Navbar = styled('nav')`
    display: grid;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    max-width: 922px;
    margin: auto;
    height: 44px;

    p, li {
        color: white;
    }
`;

const LogoLayout = styled('div')`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: space-between;
    
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;

    h1 {
        margin: 0;
        color: white;
    }

    img {
        width: 24px;
        margin-right: 10px;
    }
`;

const Settings = styled('div')`
    grid-area: 1 / 2;
    text-align: right;

    ul {
        float: right;
      }

    ul li {
        ${BaseStyles.va_center}

        list-style-type: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
        text-align: center;
        vertical-align: middle;
        float: left;

        :hover {
            border-radius: 3px;
            background-color: rgba(255,255,255,0.2);
        }
    }
`;

const AddButton = styled('button')`
    ${BaseStyles.transparent_button}
    font-size: 30px;
    color: white;
    cursor: pointer;
`;

const DarkModeButton = styled('button')`
    ${BaseStyles.transparent_button}
    color: white;
    cursor: pointer;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    svg {
        width: 20px;
        height: 20px;
    }
`;

const Header = () => {
    return (
        <StyledHeader data-testid="header">
            <Navbar>
                <LogoLayout>
                    <img src="/images/logo.png" alt="Todoist" />
                    <h1>Todoist</h1>
                </LogoLayout>
                <Settings>
                    <ul>
                        <li data-testid="quick-add-task-action">
                            <AddButton>
                                +
                            </AddButton>
                        </li>
                        <li data-testid="dark-mode-action">
                            <DarkModeButton>
                                <MdInvertColors />
                            </DarkModeButton>
                        </li>
                    </ul>
                </Settings>
            </Navbar>
        </StyledHeader>
    )
};

export default Header;