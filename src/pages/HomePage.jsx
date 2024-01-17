import React from 'react';
import Slide from '../components/Slide';
import HotItems from '../components/HotItems';
import Items from '../components/Items';
import Reviews from '../components/Reviews';
import Category from '../components/Category';

function HomePage() {
    return (
        <div>
            <Slide />
            <HotItems />
            <Items />
            <Category />
            <Reviews />
        </div>
    );
}

export default HomePage;
