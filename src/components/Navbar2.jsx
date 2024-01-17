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
                    <li>온 가족 건강</li>
                    <li>비타민</li>
                    <li>아미노산</li>
                    <li>프로틴</li>
                    <li>운동</li>
                    <li>이벤트</li>
                </StUl>
                <div></div>
            </StNav>
        </div>
    );
}

const StNav = styled.nav`
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

export default Navbar2;
