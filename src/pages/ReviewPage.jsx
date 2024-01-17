import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ReviewPage() {
    const [reviewList, setReviewList] = useState([]);
    const navigate = useNavigate();

    const getReviewList = () => {
        axios.get('http://localhost:3001/reviews').then((res) => {
            setReviewList(res.data);
        });
    };

    useEffect(() => {
        getReviewList();
    }, []);

    return (
        <div>
            <ul>
                {reviewList.map((review) => {
                    return (
                        <div>
                            <img alt='' />
                            <li key={review.id}>{review.title}</li>
                        </div>
                    );
                })}
            </ul>
            <button onClick={() => navigate('/write')}>글쓰기</button>
        </div>
    );
}

export default ReviewPage;
