import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PageA/>}/>
      <Route path='/b' element={<PageB/>}/>
      <Route path='/c' element={<PageC/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;