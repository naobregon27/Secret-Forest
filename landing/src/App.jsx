import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ViewDos from './components/view2/view2';
import ViewTres from "./components/view3/view3";
import ViewCuatro from './components/view4/view4';
import ViewCinco from './components/view5/view5';

import './App.css';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  return (
    <>
      <ViewDos isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
      <ViewTres isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
      <ViewCuatro isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
      <ViewCinco isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
    </>
  );
}

export default App;
