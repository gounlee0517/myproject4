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

function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
            // 사용자에게 팝업 창을 통해 Facebook으로 로그인하도록 합니다.
            const result = await signInWithPopup(authInstance, provider);
            navigate('/');
            // Facebook 로그인 성공 후, Firebase에 리다이렉트하여 추가 확인을 합니다.
            await signInWithRedirect(authInstance, provider);
            const redirectResult = await getRedirectResult(authInstance);

            // 나머지 로직
            if (redirectResult.credential) {
                const credential =
                    FacebookAuthProvider.credentialFromResult(redirectResult);
                const accessToken = credential.accessToken;
            }
        } catch (error) {
            console.error(error);
        }
    };
    // //회원가입
    // const signUp = async (e) => {
    //     e.preventDefault();
    //     createUserWithEmailAndPassword(auth, email, password);
    // };

    return (
        <div>
            <h3>LOGIN</h3>
            <h4>WELCOME BACK</h4>

            <div>
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    required
                />
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    required
                />
                <button onClick={signIn}>로그인</button>
                <button onClick={FacebookSignIn}>페이스북 로그인</button>
            </div>

            <div>
                <p>아이디찾기</p>|<p>비밀번호찾기</p>|
                <p onClick={() => navigate('/signup')}>회원가입</p>
            </div>
        </div>
    );
}

export default SigninPage;
