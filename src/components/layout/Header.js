import React from 'react';
import styled from 'styled-components';
import { MdInvertColors } from 'react-icons/md'
import styles from '../../styles/styles';

const StyledHeader = styled('header')`
    border-bottom: solid 1px #ca2100;
    background-color: ${styles.generic_bg};
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


const Logo = styled('div')`
    padding-left: 8px;
    grid-area: 1 / 1;

    img {
        width: 24px;
    }
`;

const Settings = styled('div')`
    grid-area: 1 / 2;
    text-align: right;

    ul {
        float: right;
      }

    ul li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;

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

        .settings__darkmode {
            button {
                @include transparent-button();
                color: white;
                cursor: pointer;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
`;

const AddButton = styled('li')`
    margin-right: 15px;
    font-size: 30px;

    button {
        background-color: transparent;
        border: 0;
        color: white;
        cursor: pointer;
    }
`;

const Header = () => {
    return (
        <StyledHeader data-testid="header">
            <Navbar>
                <Logo>
                    <img src="/images/logo.png" alt="Todoist" />
                </Logo>
                <Settings>
                    <ul>
                        <AddButton>
                            <button
                                data-testid="quick-add-task-action"
                                aria-label="Quick add task"
                                type="button"
                            >
                                +
                            </button>
                        </AddButton>
                        <li><MdInvertColors/></li>
                    </ul>
                </Settings>
            </Navbar>
        </StyledHeader>
    )
};

export default Header;