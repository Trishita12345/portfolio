import React from 'react';
import Home from './Home';

const About = React.lazy(() => import('./About'));

const MainContent = () => {
    return (
        <>
            <Home />
            <About />

        </>
    );
}

export default MainContent;
