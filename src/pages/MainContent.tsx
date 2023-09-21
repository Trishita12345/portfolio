import React from 'react';
import Home from './Home';
import Expertize from './Expertize';

const About = React.lazy(() => import('./About'));

const MainContent = () => {
    return (
        <>
            <Home />
            <About />
            <Expertize />
        </>
    );
}

export default MainContent;
