import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Items() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/items`).then((res) => {
            setPosts(res.data);
        });
    });

    return (
        <>
            <StH2>뉴트리코스트 추천</StH2>
            <StContainer>
                {posts.map((post) => {
                    return (
                        <div
                            key={post.id}
                            onClick={() => navigate(`/detail/${post.id}`)}
                        >
                            <StImg src={post.url} alt='items' />
                            <StItemName>{post.name}</StItemName>
                            <StItemPrice>{post.price}</StItemPrice>
                        </div>
                    );
                })}
            </StContainer>
        </>
    );
}

const StH2 = styled.h2`
    width: 80%;
    margin: 10vh auto;
    text-align: center;

    font-size: 25px;
`;
const StContainer = styled.div`
    width: 85%;
    margin: 0 auto 100px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(auto, 400px);
    gap: 10px;
`;
const StImg = styled.img`
    width: 20vw;
    height: 35vh;
    border: 1px solid #eeeeee;
`;
const StItemName = styled.h3`
    width: 20vw;
    font-weight: 650;
    border-bottom: 1px solid #eeeeee;
    padding-top: 7px;
    padding-bottom: 7px;
`;
const StItemPrice = styled.p`
    padding-top: 7px;
    padding-bottom: 50px;
`;

export default Items;
