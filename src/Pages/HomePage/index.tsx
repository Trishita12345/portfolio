import React, { Suspense, useEffect } from 'react';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Expertize = React.lazy(() => import('../../components/Expertize'));
const Skills = React.lazy(() => import('./Skills'));
const Feedback = React.lazy(() => import('./Feedback'));
const Follow = React.lazy(() => import('./Follow'));
const ContactUs = React.lazy(() => import('../ContactUs'));

const HomePage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
    return (
        <>
            <Suspense fallback={<div>...Loading</div>}>
                <Home />
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
                <About />
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
                <Expertize />
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
                <Skills />
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
                <Feedback />
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
                <Follow />
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
                <ContactUs />
            </Suspense>
        </>
    );
}

export default HomePage;
