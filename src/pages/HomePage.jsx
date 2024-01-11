import React from 'react';
import Slide from '../components/Slide';
import HotItems from '../components/HotItems';
import Items from '../components/Items';
import Reviews from '../components/Reviews';

function HomePage() {
    return (
        <div>
            <Slide />
            <HotItems />
            <Items />
            <Reviews />
        </div>
    );
}

export default HomePage;
