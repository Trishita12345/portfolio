import React from 'react';
import Home from './Home';
import Expertize from './Expertize';
import Skills from './Skills';

const About = React.lazy(() => import('./About'));

const MainContent = () => {
    return (
        <>
            <Home />
            <About />
            <Expertize />
            <Skills />

        </>
    );
}

export default MainContent;
