import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Write() {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        star: '',
        contents: '',
    });
    const { title, star, contents } = board;

    const onChange = (e) => {
        const { value, name } = e.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };
    const saveBoard = async () => {
        await axios.post('http://localhost:3001/reviews', board).then((res) => {
            alert('등록되었습니다');
            navigate('/review');
        });
    };
    const backToList = () => {
        navigate('/review');
    };

    return (
        <>
            <div>
                <span>제목</span>
                <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={onChange}
                />
            </div>
            <br />
            <div>
                <span>평점</span>
                <input
                    type='radio'
                    name='star'
                    value={star}
                    onChange={onChange}
                />
            </div>
            <div>
                <span>내용</span>
                <textarea
                    name='contents'
                    cols='30'
                    rows='10'
                    value={contents}
                    onChange={onChange}
                />
            </div>
            <br />
            <div>
                <button onClick={saveBoard}>등록</button>
                <button onClick={backToList}>취소</button>
            </div>
        </>
    );
}

export default Write;
