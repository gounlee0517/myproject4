import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, minusCount, deleteCart } from '../redux/modules/cartSlice';
import styled from 'styled-components';

function CartItem() {
    const [selectAll, setSelectAll] = useState(false);
    const dispatch = useDispatch();
    const cartSlice = useSelector((state) => state.cartSlice);

    const cartItems = Array.isArray(cartSlice)
        ? cartSlice
        : Object.values(cartSlice);

    const addHandler = (id) => {
        dispatch(addCount(id));
    };
    const minusHandler = (id) => {
        dispatch(minusCount(id));
    };
    const deleteHandler = (id) => {
        dispatch(deleteCart(id));
    };

    const selectAllHandler = () => {
        setSelectAll(!selectAll);
    };

    return (
        <StCartItemDiv>
            <StH3>| 장바구니</StH3>
            <StTable>
                <thead>
                    <StTr>
                        <StTh colSpan={6}>일반상품</StTh>
                    </StTr>
                </thead>
                <thead>
                    <StTrItems>
                        <StTh>
                            <input
                                type='checkbox'
                                name='item'
                                value='selectall'
                                checked={selectAll}
                                onChange={selectAllHandler}
                            />
                        </StTh>
                        <StTh>이미지</StTh>
                        <StTh>상품정보</StTh>
                        <StTh>가격</StTh>
                        <StTh>수량</StTh>
                        <StTh>선택</StTh>
                    </StTrItems>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <StTd>
                                <input
                                    type='checkbox'
                                    name='item'
                                    checked={selectAll}
                                />
                            </StTd>
                            <StTd>
                                <img
                                    src='img/itemImg.avif'
                                    alt='itemThumnail'
                                />
                            </StTd>
                            <StTd>{item.name}</StTd>
                            <StTd>{item.price}</StTd>
                            <StTd>
                                {item.count}
                                <button onClick={() => addHandler(item.id)}>
                                    +
                                </button>
                                <button onClick={() => minusHandler(item.id)}>
                                    -
                                </button>
                            </StTd>
                            <StTd style={{ verticalAlign: 'middle' }}>
                                <StChoiceBtn>주문하기</StChoiceBtn>
                                <StChoiceBtn>관심상품등록</StChoiceBtn>
                                <StChoiceBtn
                                    onClick={() => deleteHandler(item.id)}
                                >
                                    삭제
                                </StChoiceBtn>
                            </StTd>
                        </tr>
                    ))}
                    <StTrTotalPrice>
                        <td>[기본배송]</td>
                        <StPriceTd colSpan={5}>
                            상품구매금액 + 배송비 = 합계:{' '}
                        </StPriceTd>
                    </StTrTotalPrice>
                </tbody>
            </StTable>
            <StSignupBtn>주문하기</StSignupBtn>
        </StCartItemDiv>
    );
}
const StCartItemDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 100px;
`;
const StH3 = styled.h3`
    font-size: 27px;
    padding: 5px;
    color: #333333;
    border-bottom: 2px solid #333333;
`;
const StTable = styled.table`
    border-collapse: collapse;
    margin: 80px auto;
    font-size: 14px;
`;
const StTr = styled.tr`
    border: 1px solid #d7d5d5;
    background-color: #f6f6f6;
`;
const StTrItems = styled.tr`
    border-bottom: 1px solid #d7d5d5;
    background-color: #fbfafa;
`;
const StTh = styled.th`
    height: 40px;
    text-align: center;
    vertical-align: middle;
`;
const StTd = styled.td`
    width: 80vw;
    height: 80px;
    text-align: center;
    vertical-align: middle;
`;
const StChoiceBtn = styled.button`
    vertical-align: middle;
`;
const StTrTotalPrice = styled.tr`
    height: 70px;
    border-top: 1px solid #d7d5d5;
    border-bottom: 1px solid #d7d5d5;
    background-color: #fbfafa;
`;
const StPriceTd = styled.td`
    text-align: right;
    padding-right: 30px;
`;
const StSignupBtn = styled.button`
    padding: 12px 40px;
    border-style: none;
    border-radius: 2px;
    font-size: 12px;
    color: white;
    background-color: #4a5164;

    margin: auto;
    display: block;
    cursor: pointer;
`;
export default CartItem;
