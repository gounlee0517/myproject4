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

    return (
        <>
            <StOverflowDiv>
                <StSlideContainer
                    style={{ transform: `translate(-${timeSlide * 100}vw)` }}
                >
                    <StSlide>
                        <img src='img/vitamin.avif' alt='vitamin' />
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
                <div>
                    <button>비타민</button>
                    <button>온 가족 건강</button>
                    <button>스포츠</button>
                    <button>건강</button>
                </div>
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

export default Slide;
