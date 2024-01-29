import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('user', user);
        });
    }, []);

    const onChange = (e) => {
        const {
            target: { name, value },
        } = e;
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
        if (name === 'passwordConfirm') {
            setPasswordConfirm(value);
        }
        if (name === 'name') {
            setName(value);
        }
    };

    //회원가입
    const signUp = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            );
            console.log('user', userCredential.user);
            navigate('/signin');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error with signUp', errorCode, errorMessage);
        }
    };

    return (
        <StSignupDiv>
            <StH3>| 회원 가입</StH3>
            <StInputDiv>
                <div>
                    <p>아이디</p>
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={email}
                        required
                    />
                </div>

                <div>
                    <p>비밀번호</p>
                    <input
                        type='password'
                        name='password'
                        onChange={onChange}
                        value={password}
                        required
                    />
                </div>
                <div>
                    <p>비밀번호 확인</p>
                    <input
                        type='password'
                        name='passwordConfirm'
                        onChange={onChange}
                        value={passwordConfirm}
                        required
                    />
                </div>
                <div>
                    <p>이름</p>
                    <input
                        name='name'
                        onChange={onChange}
                        value={name}
                        required
                    />
                </div>
            </StInputDiv>

            <StSignupBtn onClick={signUp}>회원가입</StSignupBtn>
        </StSignupDiv>
    );
}
const StSignupDiv = styled.div`
    width: 90%;
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
const StInputDiv = styled.div`
    margin-top: 15px;
    padding-top: 30px;
    padding-bottom: 50px;
    border-top: 1px solid #999999;
`;
const StSignupBtn = styled.button`
    padding: 12px 40px;
    border-style: none;
    border-radius: 2px;
    font-size: 12px;
    color: white;
    background-color: #4a5164;
`;
export default SignupPage;
