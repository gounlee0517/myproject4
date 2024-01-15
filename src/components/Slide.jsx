import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Slide() {
    const [timeSlide, setTimeSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeSlide((prev) => (prev + 1) % 4);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleButtonClick = (index) => {
        setTimeSlide(index);
    };

    return (
        <>
            <StOverflowDiv>
                <StSlideContainer
                    style={{ transform: `translate(-${timeSlide * 100}vw)` }}
                >
                    <StSlide>
                        <img src='img/vitamin.avif' alt='vitamin' />
                        <StInfo>
                            <h4>활력 에너지 충전</h4>
                            <h2>비타민 & 미네랄</h2>
                            <h4>
                                당신의 건강한 몸을 위한 <br />
                                모든 비타민과 미네랄이 여기 한 자리에!
                            </h4>
                            <button>MORE VIEW</button>
                        </StInfo>
                    </StSlide>
                    <StSlide>
                        <img src='img/family.avif' alt='family' />
                    </StSlide>
                    <StSlide>
                        <img src='img/sports.avif' alt='sports' />
                    </StSlide>
                    <StSlide>
                        <img src='img/health.avif' alt='health' />
                    </StSlide>
                </StSlideContainer>
                <StButtonDiv>
                    <StButton onClick={() => handleButtonClick(0)}>
                        비타민
                    </StButton>
                    <StButton onClick={() => handleButtonClick(1)}>
                        온 가족 건강
                    </StButton>
                    <StButton onClick={() => handleButtonClick(2)}>
                        스포츠
                    </StButton>
                    <StButton onClick={() => handleButtonClick(3)}>
                        건강
                    </StButton>
                </StButtonDiv>
            </StOverflowDiv>
        </>
    );
}

const StOverflowDiv = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
`;
const StSlideContainer = styled.div`
    width: 400vw;
    display: flex;
    transition: all 0.5s;
`;
const StSlide = styled.div`
    width: 100vw;
    height: 600px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const StButtonDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -170%);
`;
const StButton = styled.button`
    border-style: none;
    margin-right: 10px;
    padding: 6px 22px;
    background-color: white;
    opacity: 0.8;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`;
const StInfo = styled.div`
    z-index: 10;
`;

export default Slide;
