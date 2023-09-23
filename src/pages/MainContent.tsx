import React from 'react';
import Header from './Header';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Expertize = React.lazy(() => import('./Expertize'));
const Skills = React.lazy(() => import('./Skills'));
const Feedback = React.lazy(() => import('./Feedback'));
const Follow = React.lazy(() => import('./Follow'));

const MainContent = () => {
    return (
        <>
            <Home />
            <About />
            <Expertize />
            <Skills />
            <Feedback />
            <Follow />
        </>
    );
}

export default MainContent;
