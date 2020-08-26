import React from 'react';
import Firebase from '../firebase/firebase';
import styled from 'styled-components';


const CheckboxHolder = styled('div')`
`;

const CheckboxSpan = styled('span')`
`;

const Checkbox = ({ id }) => {
    const archiveTasks = () => {
        Firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true,
            });
    };

    return (
        <CheckboxHolder
            data-testid='checkbox-action'
            onClick={() => archiveTasks()}
        >
            <CheckboxSpan />
        </CheckboxHolder>

    )
};

export default Checkbox;