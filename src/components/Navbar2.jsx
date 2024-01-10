import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar2() {
    return (
        <div>
            <StNav>
                <StUl>
                    <li>
                        <AiOutlineMenu />
                    </li>
                    <li>온 가족 건강</li>
                    <li>비타민</li>
                    <li>아미노산</li>
                    <li>프로틴</li>
                    <li>운동</li>
                    <li>이벤트</li>
                </StUl>
            </StNav>
        </div>
    );
}
const StNav = styled.nav`
    padding: 13px;
    position: sticky;
    top: 0;
    justify-content: space-between;
    font-size: 13px;
    color: #6a6a6a;

    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
`;
const StUl = styled.ul`
    display: flex;
    padding: 5px;
`;

export default Navbar2;
