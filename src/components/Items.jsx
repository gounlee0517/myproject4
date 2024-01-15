import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Items() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    // const getPosts = () => {

    // };
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
                            <img alt='items' />
                            <h3>{post.name}</h3>
                            <p>{post.price}</p>
                        </div>
                    );
                })}
            </StContainer>
        </>
    );
}

const StH2 = styled.h2`
    width: 90%;
    margin: 10vh auto;
    text-align: center;

    font-size: 25px;
`;
const StContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(250px, auto);
    gap: 20px;
`;

export default Items;
