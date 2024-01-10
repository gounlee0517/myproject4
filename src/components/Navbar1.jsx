import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegStar } from 'react-icons/fa';
import { MdBookmarkBorder } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Navbar1() {
    const navigate = useNavigate();
    const logOut = async (e) => {
        e.preventDefault();
        await signOut(auth);
    };

    return (
        <div>
            <StNav>
                <StUl>
                    <li>
                        <FaRegStar />
                        즐겨찾기
                    </li>
                    |
                    <li>
                        <MdBookmarkBorder />
                        바로가기
                    </li>
                    <li>
                        <FaFacebookF />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                </StUl>
                <StUl>
                    <li onClick={() => navigate('/signin')}>로그인</li>|
                    <li onClick={() => navigate('/signup')}>회원가입</li>|
                    <li>장바구니</li>|<li>관심상품</li>
                    <StInput />
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

const StInput = styled.input`
    border-style: none;
    background-color: #e8e8e8;
    border-radius: 5px;
    padding: 5px 1px;
`;

export default Navbar1;
