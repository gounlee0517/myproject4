import React from 'react';
import styled from 'styled-components';

function HotItems() {
    return (
        <>
            <StContainer>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </StContainer>
        </>
    );
}

const StContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 100px);
`;

export default HotItems;
