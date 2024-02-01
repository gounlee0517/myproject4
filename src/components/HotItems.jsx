import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CARD_BACKGROUND_COLOR = {
    0: '#fbe9e9',
    1: '#fff3d5',
    2: '#d9d9f1',
    3: '#e0f3fa',
};
const CARD_IMG_SRC = {
    0: 'img/rosehips.png',
    1: 'img/vitaminC.png',
    2: 'img/resveratrol.png',
    3: 'img/taurine.png',
};

function HotItems() {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('http://localhost:3001/hotItems').then((res) => {
            setPosts(res.data);
        });
    };
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <StContainer>
                <div>
                    <StH2>
                        <span style={{ fontWeight: '300' }}>WEEKLY</span> HOT
                        ITEMS
                    </StH2>
                </div>
                {posts.map((post, index) => {
                    return (
                        <PostContainer
                            key={post.id}
                            bgColor={CARD_BACKGROUND_COLOR[index]}
                        >
                            <StH3>{post.name}</StH3>
                            <StP>{post.detail}</StP>
                            <StImg src={CARD_IMG_SRC[index]} alt='img' />
                        </PostContainer>
                    );
                })}
            </StContainer>
        </>
    );
}

const PostContainer = styled.div`
    background-color: ${({ bgColor }) => bgColor};
    text-align: center;
`;

const StContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 100px);
    gap: 20px;
    margin: 50px auto;
    cursor: pointer;

    :nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    :nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 4;
    }
    :nth-child(3) {
        grid-column-start: 4;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 4;
    }
    :nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 4;
        grid-row-end: 6;
    }
    :nth-child(5) {
        grid-column-start: 6;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end: 6;
    }
`;
const StH2 = styled.h2`
    font-size: 32px;
    font-weight: lighter;
    padding-top: 40px;
`;
const StImg = styled.img`
    width: 100px;
`;
const StH3 = styled.h3`
    background-color: none;
`;
const StP = styled.p`
    background-color: none;
`;

export default HotItems;
