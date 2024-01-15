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
        <>
            <StH2>REVIEWS</StH2>
            <StContainer>
                {posts.map((post) => {
                    return (
                        <div
                            key={post.id}
                            onClick={() => navigate('/review/:id')}
                        >
                            <img alt='items' />
                            <h3>{post.name}</h3>
                            <p>{post.content}</p>
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
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(250px, auto);
    gap: 20px;
`;

export default Reviews;
