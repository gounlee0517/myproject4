import React from 'react';
import styled from 'styled-components';

function Category() {
    return (
        <div>
            <StContainer>
                <div>GENERAL HEALTH</div>
                <div>VITAMINS</div>
                <div>PROTEIN</div>
                <div>WORKOUT</div>
            </StContainer>
        </div>
    );
}
const StContainer = styled.div`
    width: 90%;
    margin: 10px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 250px;
    text-align: center;
    color: white;
    font-size: 14px;
    :nth-child(1) {
        background: url(img/generalHealth.avif);
        background-size: cover;
        filter: brightness(90%);
    }
    :nth-child(2) {
        background: url(img/fruits.avif);
        background-size: cover;
        filter: brightness(90%);
    }
    :nth-child(3) {
        background: url(img/protein.avif);
        background-size: cover;
        filter: brightness(90%);
    }
    :nth-child(4) {
        background: url(img/workout.avif);
        background-size: cover;
        filter: brightness(90%);
    }
`;

export default Category;
