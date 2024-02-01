import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar2() {
    return (
        <div>
            <StNav>
                <StMenu>
                    <AiOutlineMenu />
                </StMenu>

                <StUl>
                    <StLi>온 가족 건강</StLi>
                    <StLi>비타민</StLi>
                    <StLi>아미노산</StLi>
                    <StLi>프로틴</StLi>
                    <StLi>운동</StLi>
                    <StLi>이벤트</StLi>
                </StUl>
                <div></div>
            </StNav>
        </div>
    );
}

const StNav = styled.nav`
    position: relative;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 5px;

    padding: 17px;
    font-size: 13px;
    color: #6a6a6a;

    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
`;
const StUl = styled.ul`
    display: flex;
`;
const StMenu = styled.div`
    border-left: 1px solid #f4f4f4;
    border-right: 1px solid #f4f4f4;
`;
const StLi = styled.li`
    transition: all 0.5s;

    &:hover {
        font-weight: 900;
    }
`;

export default Navbar2;
