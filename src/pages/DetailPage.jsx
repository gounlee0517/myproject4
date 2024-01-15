import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function DetailPage() {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    // const getPosts = () => {

    // };
    useEffect(() => {
        axios.get(`http://localhost:3001/items/${id}`).then((res) => {
            setPosts(res.data);
        });
    }, [id]);

    return (
        <div>
            <div>
                <img alt='item' />
                <div>
                    <h2>{posts.name}</h2>
                    <p>{posts.price}</p>
                    <p>{posts.delivery}</p>
                    <p>{posts.deliveryPrice}</p>
                </div>
            </div>
            <button>바로 구매하기</button>
            <button>장바구니 담기</button>
            <button>관심상품 등록</button>
        </div>
    );
}

export default DetailPage;
