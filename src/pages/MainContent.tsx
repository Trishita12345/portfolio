import React, { Suspense } from 'react';
import Home from './Home';

const About = React.lazy(() => import('./About'));

const MainContent = () => {
    return (
        <>
            <Home />
            <Suspense fallback={<div>Loading...</div>}>
                <About />
            </Suspense>

        </>
    );
}

export default MainContent;
