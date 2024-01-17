import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import ReviewPage from '../pages/ReviewPage';
import DetailPage from '../pages/DetailPage';
import Layout from '../components/Layout';
import Write from '../pages/Write';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/signin' element={<SigninPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/review' element={<ReviewPage />} />
                    <Route path='/write' element={<Write />} />
                    <Route path='/detail/:id' element={<DetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
