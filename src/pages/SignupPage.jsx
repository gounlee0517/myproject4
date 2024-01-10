import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <div>
                <p>아이디</p>
                <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={email}
                    required
                />
                <p>비밀번호</p>
                <input
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={password}
                    required
                />
                <p>비밀번호 확인</p>
                <input
                    type='password'
                    name='passwordConfirm'
                    onChange={onChange}
                    value={passwordConfirm}
                    required
                />
                <p>이름</p>
                <input name='name' onChange={onChange} value={name} required />
            </div>
            <button onClick={signUp}>회원가입</button>
        </div>
    );
}

export default SignupPage;
