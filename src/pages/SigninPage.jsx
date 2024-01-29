import { useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    getAuth,
    signInWithPopup,
    FacebookAuthProvider,
    getRedirectResult,
    signInWithRedirect,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import { useDispatch } from 'react-redux';
import { login } from '../redux/modules/authSlice';
import styled from 'styled-components';

function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('user', user);
        });
    }, []);

    //input 동작 감지
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
    };

    //로그인
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password,
            );
            dispatch(login(true));
            navigate('/');
            console.log(userCredential);
        } catch (error) {
            console.error(error);
        }
    };

    const FacebookSignIn = async () => {
        const provider = new FacebookAuthProvider();
        const authInstance = getAuth();

        try {
            // 사용자에게 팝업 창을 통해 Facebook으로 로그인
            const result = await signInWithPopup(authInstance, provider);
            navigate('/');
            // Facebook 로그인 성공 후, Firebase에 리다이렉트하여 추가 확인
            await signInWithRedirect(authInstance, provider);
            const redirectResult = await getRedirectResult(authInstance);

            if (redirectResult.credential) {
                const credential =
                    FacebookAuthProvider.credentialFromResult(redirectResult);
                const accessToken = credential.accessToken;
            }
            dispatch(login(true));
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const kakaoClientId = 'c4af41ece2bef5ccf0a906c645c0c0f8';
    const kakaoOnSuccess = async (data) => {
        console.log(data);
        const idToken = data.response.access_token;
        dispatch(login(true));
        navigate('/');
    };
    const kakaoOnFailure = (error) => {
        console.log(error);
    };

    return (
        <StLoginDiv>
            <StH3>LOGIN</StH3>
            <StH4>WELCOME BACK</StH4>

            <StInputDiv>
                <StLoginInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    placeholder='아이디'
                    required
                />
                <StLoginInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    placeholder='비밀번호'
                    required
                />
                <StLoginBtn onClick={signIn}>로그인</StLoginBtn>
            </StInputDiv>

            <StFindingDiv>
                <p>아이디찾기</p>&nbsp;&nbsp;|&nbsp;&nbsp;
                <p>비밀번호찾기</p>&nbsp;&nbsp;|&nbsp;&nbsp;
                <p onClick={() => navigate('/signup')}>회원가입</p>
            </StFindingDiv>

            <StSocialLoginBtn>
                <StFacebookLoginBtn onClick={FacebookSignIn}>
                    페이스북 로그인
                </StFacebookLoginBtn>
                <KakaoLogin
                    token={kakaoClientId}
                    onSuccess={kakaoOnSuccess}
                    onFail={kakaoOnFailure}
                />
            </StSocialLoginBtn>
        </StLoginDiv>
    );
}
const StLoginDiv = styled.div`
    padding: 100px;
    text-align: center;
`;
const StH3 = styled.h3`
    font-size: 40px;
    color: #333333;
`;
const StH4 = styled.h4`
    padding: 10px;
    font-size: 15px;
    color: #999999;
`;
const StInputDiv = styled.div`
    width: 400px;
    margin: 0 auto;
`;
const StLoginInput = styled.input`
    width: 400px;
    height: 50px;
    margin-top: 10px;
    padding: 10px;

    border-style: none;
    border-bottom: 1px solid #d8d8d8;
    font-size: 15px;
`;
const StLoginBtn = styled.button`
    width: 400px;
    height: 48px;
    margin-top: 10px;

    border-style: none;
    background-color: #262c2f;
    color: white;
    font-size: 16px;
`;
const StFindingDiv = styled.div`
    width: 400px;
    margin: 30px auto;
    padding: 15px;
    display: flex;
    justify-content: center;

    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    color: #727272;
    font-size: 15px;
`;
const StSocialLoginBtn = styled.div`
    width: 400px;
    margin: 0 auto;
`;
const StFacebookLoginBtn = styled.button`
    width: 400px;
    height: 45px;
    margin-bottom: 10px;

    border-style: none;
    border-radius: 10px;
    background-color: #f4f4f4;
    color: #727272;
`;
export default SigninPage;
