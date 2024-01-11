import React from 'react';
import styled from 'styled-components';

function Items() {
    return (
        <>
            <h2>뉴트리코스트 추천</h2>
            <StContainer>
                <div></div>
                <div></div>
                <div></div>
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
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, 200px);
    gap: 20px;
`;

export default Items;
