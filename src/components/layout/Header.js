import React from 'react';
import styled from 'styled-components';
import { MdInvertColors } from 'react-icons/md'

const StyledHeader = styled('header')`

`;

const Logo = styled('div')`

`;

const Settings = styled('div')`

`;

const Header = () => {
    return (
        <StyledHeader data-testid="header">
            <nav>
                <Logo>
                    <img src="/images/logo.png" alt="Todoist" />
                </Logo>
                <Settings>
                    <ul>
                        <li>+</li>
                        <li><MdInvertColors/></li>
                    </ul>
                </Settings>
            </nav>
        </StyledHeader>
    )
};

export default Header;