import React from 'react';
import Home from './Home';
import Expertize from './Expertize';
import Skills from './Skills';
import Follow from './Follow';
const About = React.lazy(() => import('./About'));

const MainContent = () => {
    return (
        <>
            <Home />
            <About />
            <Expertize />
            <Skills />
            <Follow />
        </>
    );
}

export default MainContent;
