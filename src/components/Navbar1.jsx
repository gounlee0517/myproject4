import React from 'react';
import styled from 'styled-components';

function Navbar1() {
    return (
        <div>
            <StNav>
                <StUl>
                    <li>즐겨찾기</li>
                    <li>바로가기</li>
                </StUl>
                <StUl>
                    <li>로그인</li>
                    <li>회원가입</li>
                    <li>장바구니</li>
                    <li>관심상품</li>
                    <input />
                </StUl>
            </StNav>
        </div>
    );
}

const StNav = styled.nav`
    padding: 3px;
    margin: 0 auto;
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    font-size: 12px;
    color: #6a6a6a;

    border-bottom: 1px solid #f4f4f4;
`;

const StUl = styled.ul`
    display: flex;
    padding: 5px;
`;

export default Navbar1;
