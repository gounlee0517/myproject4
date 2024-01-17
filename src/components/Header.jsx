import React from 'react';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar1 />
            <StDiv>
                <StLogo
                    src='img/nutricost_logo1.webp'
                    alt='logo'
                    onClick={() => navigate('/')}
                />
            </StDiv>
            <Navbar2 />
        </div>
    );
}

const StDiv = styled.div`
    padding: 90px;
    display: flex;
    justify-content: center;
`;
const StLogo = styled.img`
    width: 220px;
`;

export default Header;
