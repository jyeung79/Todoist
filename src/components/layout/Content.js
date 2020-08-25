import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';

const ContentSection = styled('section')`

`

const Content = () => {
    return (
        <ContentSection>
            <Sidebar />
        </ContentSection>
    )
}

export default Content;