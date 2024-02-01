import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/modules/cartSlice';

function DetailPage() {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/items/${id}`).then((res) => {
            setPosts(res.data);
        });
    }, [id]);

    const addCartHandler = () => {
        dispatch(addCart(posts));
        navigate('/cart');
    };

    return (
        <div>
            <StDetailDiv>
                <StDetailImg src={posts.url} alt='item' />
                <StDetailTxtDiv>
                    <div>
                        <StH2>{posts.name}</StH2>
                        <StPrice>
                            <StSpan>판매가</StSpan> {posts.price}
                        </StPrice>
                        <StP>
                            <StSpan>배송법</StSpan> {posts.delivery}
                        </StP>
                        <StP>
                            <StSpan>배송비</StSpan> {posts.deliveryPrice}
                        </StP>
                    </div>
                    <StBtnDiv>
                        <StBtn
                            style={{
                                backgroundColor: '#333333',
                                color: 'white',
                            }}
                        >
                            바로 구매하기
                        </StBtn>
                        <StBtn
                            name={'장바구니'}
                            onClick={() => addCartHandler(id)}
                        >
                            장바구니 담기
                        </StBtn>
                        <StBtn>관심상품 등록</StBtn>
                    </StBtnDiv>
                </StDetailTxtDiv>
            </StDetailDiv>
        </div>
    );
}

const StDetailDiv = styled.div`
    width: 80%;
    margin: 60px auto 200px auto;
    display: flex;
`;
const StDetailImg = styled.img`
    width: 500px;
    border: 1px solid #d8d8d8;
`;
const StDetailTxtDiv = styled.div`
    width: 700px;
    margin-left: 50px;
    border-top: 2px solid #262c2f;
`;
const StH2 = styled.h2`
    padding: 15px;
    font-size: 28px;
    font-weight: 400;
    color: #646464;
    border-bottom: 1px solid #eeeeee;
`;
const StPrice = styled.p`
    padding: 15px;
    border-bottom: 1px solid #eeeeee;
    font-size: 22px;
    font-weight: 600;
    color: #90163b;
`;
const StP = styled.p`
    padding: 15px;
    border-bottom: 1px solid #eeeeee;
    color: #7a7a7a;
`;
const StSpan = styled.span`
    font-weight: 600;
    font-size: 18px;
    color: #333333;
    margin-right: 60px;
`;
const StBtnDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 2fr;
    gap: 5px;
    margin: 20px auto;
`;
const StBtn = styled.button`
    padding: 15px;
    font-size: 16px;
    color: #7a7a7a;
    border-style: none;
    cursor: pointer;
`;
export default DetailPage;
