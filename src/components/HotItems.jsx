import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HotItems() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

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
                    <h2>WEEKLY HOTITEMS</h2>
                </div>
                {posts.map((post) => {
                    return (
                        <div
                            key={post.id}
                            onClick={() => navigate('/detail/:id')}
                        >
                            <h3>{post.name}</h3>
                            <p>{post.detail}</p>
                        </div>
                    );
                })}
            </StContainer>
        </>
    );
}

const StContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 100px);
    gap: 20px;
    margin: 30px auto;
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
        background-color: #fbe9e9;
    }
    :nth-child(3) {
        grid-column-start: 4;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 4;
        background-color: #fff3d5;
    }
    :nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 4;
        grid-row-end: 5;
        background-color: #d9d9f1;
    }
    :nth-child(5) {
        grid-column-start: 6;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end: 5;
        background-color: #e0f3fa;
    }
`;

export default HotItems;
