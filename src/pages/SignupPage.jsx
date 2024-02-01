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
            <StTable>
                <tr>
                    <StTd style={{ backgroundColor: '#fbfafa' }}>아이디</StTd>
                    <StTd>
                        <StInput
                            type='email'
                            name='email'
                            onChange={onChange}
                            value={email}
                            required
                        />
                        (영문소문자/숫자, 4~16자)
                    </StTd>
                </tr>
                <tr>
                    <StTd style={{ backgroundColor: '#fbfafa' }}>비밀번호</StTd>
                    <StTd>
                        <StInput
                            type='password'
                            name='password'
                            onChange={onChange}
                            value={password}
                            required
                        />
                        (영문 대소문자/숫자 조합)
                    </StTd>
                </tr>
                <tr>
                    <StTd style={{ backgroundColor: '#fbfafa' }}>
                        비밀번호 확인
                    </StTd>
                    <StTd>
                        <StInput
                            type='password'
                            name='passwordConfirm'
                            onChange={onChange}
                            value={passwordConfirm}
                            required
                        />
                    </StTd>
                </tr>
                <tr>
                    <StTd style={{ backgroundColor: '#fbfafa' }}>이름</StTd>
                    <StTd>
                        <StInput
                            name='name'
                            onChange={onChange}
                            value={name}
                            required
                        />
                    </StTd>
                </tr>
            </StTable>

            <StSignupBtn onClick={signUp}>회원가입</StSignupBtn>
        </StSignupDiv>
    );
}
const StSignupDiv = styled.div`
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
const StTable = styled.div`
    border-collapse: collapse;
    margin-top: 15px;
    padding-top: 30px;
    padding-bottom: 50px;
    border-top: 1px solid #d6d4d4;
`;
const StTd = styled.td`
    width: 50vw;
    height: 40px;
    padding-left: 20px;
    border: 1px solid #d6d4d4;
    vertical-align: middle;
    color: #6c6c6c;
    font-size: 13px;
`;
const StInput = styled.input`
    border-style: none;
    border: 1px solid #d6d4d4;
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
`;
export default SignupPage;
