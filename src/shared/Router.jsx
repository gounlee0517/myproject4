import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import ReviewPage from '../pages/ReviewPage';
import DetailPage from '../pages/DetailPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signin' element={<SigninPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/review/:id' element={<ReviewPage />} />
                <Route path='/Detail/:id' element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
