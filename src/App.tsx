import React from 'react';

import './App.css';
import CustomNav from './components/CustomNav/CustomNav';
import MainRoutes from './Routes';

const App : React.FC = () => {
  return(
    <>
      <CustomNav/>
      <MainRoutes />
    </>
  )
}

export default App;
