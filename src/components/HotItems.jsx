import React from 'react';
import styled from 'styled-components';

function HotItems() {
    return (
        <>
            <StContainer>
                <div>
                    <StH2>
                        <span style={{ fontWeight: '300' }}>WEEKLY</span> HOT
                        ITEMS
                    </StH2>
                </div>

                <StDiv
                    backgroundColor='#fbe9e9'
                    display='flex'
                    textAlign='center'
                >
                    <StImg src='img/rosehips.png' alt='rosehips' />
                    <StTxtDiv padding='30px'>
                        <StH3 fontSize='15px' fontWeight='900'>
                            비타민C 로즈힙 캡슐형
                        </StH3>
                        <StP
                            fontSize='12px'
                            fontWeight='700'
                            color='#a2a1a5'
                            marginTop='6px'
                        >
                            요즘같은 시기에 <br /> 가장 필요한 영양제
                        </StP>
                        <StMoreBtn>MORE</StMoreBtn>
                    </StTxtDiv>
                </StDiv>

                <StDiv backgroundColor='#fff3d5' textAlign='center'>
                    <StH3 fontSize='15px' fontWeight='900'>
                        비타민C 파우더
                    </StH3>
                    <StP
                        fontSize='12px'
                        fontWeight='700'
                        color='#a2a1a5'
                        marginTop='6px'
                    >
                        100% 비타민C 파우더
                    </StP>
                    <StImg src='img/vitaminC.png' alt='vitamin' />
                </StDiv>

                <StDiv
                    backgroundColor='#d9d9f1'
                    display='flex'
                    textAlign='left'
                >
                    <StTxtDiv
                        padding='30px'
                        backgroundColor='rgba(255, 255, 255, 0.7)'
                    >
                        <StP fontSize='12px' fontWeight='700' color='#a2a1a5'>
                            강력한 항산화로 면역력 UP!
                        </StP>
                        <StH3 fontSize='23px' fontWeight='400'>
                            뉴트리코스트 레스베라트롤
                        </StH3>
                        <StP fontSize='10px' fontWeight='700' marginTop='20px'>
                            상품 바로가기
                        </StP>
                    </StTxtDiv>
                    <StImg
                        src='img/resveratrol.png'
                        alt='resveratrol'
                        transform='translateX(70px)'
                    />
                </StDiv>

                <StDiv backgroundColor='#e0f3fa' textAlign='center'>
                    <StTxtDiv transform='translateY(70px)'>
                        <StP fontSize='12px' fontWeight='700' color='#a2a1a5'>
                            대용량 캡슐로 매일매일 간편하게!
                        </StP>
                        <StH3 fontSize='25px' fontWeight='900'>
                            뉴트리코스트 타우린
                        </StH3>
                        <StP fontSize='10px' fontWeight='700' color='#a2a1a5'>
                            오늘 하루도 쌩쌩하게- <br />
                            활력을 불어넣는 타우린 캡슐형
                        </StP>
                    </StTxtDiv>
                    <StImg
                        src='img/taurine.png'
                        alt='taurine'
                        transform='translateY(130px)'
                    />
                </StDiv>
            </StContainer>
        </>
    );
}

const StContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 100px);
    gap: 20px;
    margin: 50px auto;
    color: #5a595b;
    cursor: pointer;

    :nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    :nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 4;
    }
    :nth-child(3) {
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 2;
        grid-row-end: 4;
    }
    :nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 7;
        grid-row-start: 4;
        grid-row-end: 6;
    }
    :nth-child(5) {
        grid-column-start: 7;
        grid-column-end: 11;
        grid-row-start: 1;
        grid-row-end: 6;
    }
`;
const StH2 = styled.h2`
    font-size: 40px;
    font-weight: lighter;
    padding-top: 40px;
`;
const StDiv = styled.div`
    background-color: ${(props) => props.backgroundColor};
    text-align: ${(props) => props.textAlign};
    display: ${(props) => props.display};
    padding: 20px;
    transition: all 0.7s;
    &:hover {
        opacity: 0.5;
    }
`;
const StImg = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    transform: ${(props) => props.transform};
`;
const StH3 = styled.h3`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
`;
const StP = styled.p`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
`;
const StTxtDiv = styled.div`
    padding: ${(props) => props.padding};
    transform: ${(props) => props.transform};
    background-color: ${(props) => props.backgroundColor};
`;

const StMoreBtn = styled.button`
    padding: 12px 40px;
    margin-top: 25px;

    color: white;
    font-size: 10px;
    font-weight: 600;
    background-color: #ff3d4a;

    border-style: none;
    border-radius: 30px;
`;

export default HotItems;
