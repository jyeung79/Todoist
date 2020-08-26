import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Tasks from '../Tasks';

const ContentSection = styled('section')`

`

const Content = () => {
    return (
        <ContentSection>
            <Sidebar />
            <Tasks />
        </ContentSection>
    )
}

export default Content;