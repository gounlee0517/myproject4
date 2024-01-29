import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <div>
            <StInfoDiv>
                <p>회사소개</p>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <p>이용약관</p>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <p>쇼핑몰 이용안내</p>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <p>개인정보취급방침</p>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <p>고객센터</p>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <p>제휴/도매문의</p>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <p>채용정보</p>
            </StInfoDiv>
            <StCompanyInfo>
                <div>
                    <StH4>고객만족센터</StH4>
                    <StH3>070-8234-1234</StH3>
                    <StP>
                        <span style={{ fontWeight: 'bold' }}>평일</span> 오전
                        9:00 ~ 오후 17:00
                    </StP>
                    <StP>
                        <span style={{ fontWeight: 'bold' }}>점심</span> 오후
                        12:00 ~ 오후 13:00
                    </StP>
                    <StP>
                        <span style={{ fontWeight: 'bold' }}>휴무</span> 토 / 일
                        / 공휴일은 휴무
                    </StP>
                </div>
                <div>
                    <StH4>배송조회</StH4>
                    <StP>우체국택배 (TEL: 1588-1300)</StP>
                    <StH4>반품 & 교환</StH4>
                    <StP>
                        반품배송지 서울특별시 마포구 동교동 179-36
                        저스트빌딩바이케이 2층
                    </StP>
                </div>
                <div>
                    <StH4>소핑메뉴</StH4>
                    <StBtn>자주 묻는 질문</StBtn>
                    <StBtn>고객 만족센터</StBtn>
                    <StBtn>회원 등급 안내</StBtn>
                    <StBtn>브랜드 스토리</StBtn>
                </div>
            </StCompanyInfo>
            <StCopyright>
                <p> COPYRIGHT © 2019 뉴트리코스트. ALL RIGHTS RESERVED.</p>
            </StCopyright>
        </div>
    );
}
const StInfoDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 18px;
    display: flex;
    font-size: 13px;
    color: #727272;
`;
const StCompanyInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 90%;
    padding: 10px;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 0 auto;
    border-top: 1px solid #d8d8d8;
`;
const StCopyright = styled.div`
    padding: 15px;
    background-color: #424242;
    color: white;
    font-size: 10px;
    letter-spacing: 4px;
`;
const StP = styled.p`
    font-size: 13px;
    color: #727272;
`;
const StH3 = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
`;
const StH4 = styled.h4`
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const StBtn = styled.button`
    padding: 3px 8px;
    border-style: none;
    background-color: transparent;
    border: 1px solid #d8d8d8;
    color: #727272;
    margin: 5px 5px 5px 5px;
`;
export default Footer;
