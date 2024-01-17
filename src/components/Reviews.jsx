import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Reviews() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const getPosts = () => {
        axios.get('http://localhost:3001/reviews').then((res) => {
            setPosts(res.data);
        });
    };
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <StReviewDiv>
            <StReviewSectionTitle>
                <StP>고객님들의 생생한 후기를 만나보세요</StP>
                <StH2 onClick={() => navigate('/review')}>PHOTO REVIEWS</StH2>
            </StReviewSectionTitle>
            <StContainer>
                {posts.map((post) => {
                    return (
                        <StDiv
                            key={post.id}
                            onClick={() => navigate('/review')}
                        >
                            <StImg src={post.url} alt='items' />
                            <StTextDiv>
                                <StTitle>{post.title}</StTitle>
                                <StContent>{post.contents}</StContent>
                            </StTextDiv>
                        </StDiv>
                    );
                })}
            </StContainer>
        </StReviewDiv>
    );
}
const StReviewDiv = styled.div`
    background-color: #f8f8f8;
    color: #333333;
    padding-bottom: 100px;
`;
const StReviewSectionTitle = styled.div`
    width: 90%;
    margin: 12vh auto;
    padding-top: 50px;
    text-align: center;
`;
const StH2 = styled.h2`
    font-size: 23px;
    font-weight: 500;
`;
const StP = styled.p`
    font-size: 14px;
    color: #999999;
    margin-bottom: 5px;
`;
const StContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(250px, auto);
    gap: 20px;
`;
const StDiv = styled.div`
    border: 1px solid #e8e8e8;
    background-color: white;
`;
const StImg = styled.img`
    width: 100%;
    height: 230px;
    background-size: cover;
`;
const StTextDiv = styled.div`
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
`;
const StTitle = styled.h3`
    margin-bottom: 10px;
`;
const StContent = styled.p`
    font-size: 13px;
`;

export default Reviews;
