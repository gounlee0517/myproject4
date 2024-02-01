import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/modules/authSlice';

function Navbar1() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state);
    console.log(isLogin);

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    const scrollEvent = () => {};

    const onLogoutClick = () => {
        auth.signOut();
        dispatch(login(false));
        navigate('/');
    };

    return (
        <div>
            <StNav>
                <StUl>
                    <li>☆ 즐겨찾기</li>|<li>➲ 바로가기</li>|<li>facebook</li>
                    <li>instagram</li>
                </StUl>
                <StUl>
                    {isLogin.authSlice.isLoggedIn ? (
                        <>
                            <li
                                onClick={() => {
                                    onLogoutClick();
                                }}
                            >
                                로그아웃
                            </li>
                            |
                        </>
                    ) : (
                        <>
                            <li onClick={() => navigate('/signin')}>로그인</li>|
                            <li onClick={() => navigate('/signup')}>
                                회원가입
                            </li>
                            |
                        </>
                    )}
                    <li onClick={() => navigate('/cart')}>장바구니</li>|
                    <li>관심상품</li>
                    <StInput />
                </StUl>
            </StNav>
        </div>
    );
}

const StNav = styled.nav`
    width: 100%;
    padding: 3px;
    margin: 0 auto;
    display: flex;
    position: fixed;
    z-index: 1;
    justify-content: space-between;
    font-size: 12px;
    color: #6a6a6a;
    background-color: white;
    opacity: 0.95;

    border-bottom: 1px solid #f4f4f4;
    box-shadow: 0 4px 4px -4px gray;
`;

const StUl = styled.ul`
    display: flex;
    padding: 5px;
    padding-top: 12px;
    justify-content: center;
`;

const StInput = styled.input`
    border-style: none;
    background-color: #e8e8e8;
    border-radius: 5px;
    padding: 5px 1px;
    transform: translateY(-4px);
`;

export default Navbar1;
