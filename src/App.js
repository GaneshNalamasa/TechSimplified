import './App.css';
import Home from './components/Home';
import Html from './components/Html';
import Css from './components/Css';
import Angular from './components/Angular';
import Django from './components/Django';
import Express from './components/Express';
import Java from './components/Java';
import Javascript from './components/Javascript';
import Mongodb from './components/Mongodb';
import Nodejs from './components/Nodejs';
import Powerbi from './components/Powerbi';
import Python from './components/Python';
import Reactjs from './components/Reactjs';
import Sql from './components/Sql';
import Excel from './components/Excel';
import Git from './components/Git';
import Numpy from './components/Numpy';
import Pandas from './components/Pandas';
import Csharp from './components/Csharp';
import Dsa from './components/Dsa';
import Body from './components/Body';
// import Error from './components/Error';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Home />
      {location.pathname === '/' && <Body />}

      <Routes>
        <Route path='/html' element={<Html />} />
        <Route path='/css' element={<Css />} />
        <Route path='/angular' element={<Angular />} />
        <Route path='/django' element={<Django />} />
        <Route path='/express' element={<Express />} />
        <Route path='/java' element={<Java />} />
        <Route path='/csharp' element={<Csharp />} />
        <Route path='/dsa' element={<Dsa />} />
        <Route path='/javascript' element={<Javascript />} />
        <Route path='/mongodb' element={<Mongodb />} />
        <Route path='/nodejs' element={<Nodejs />} />
        <Route path='/powerbi' element={<Powerbi />} />
        <Route path='/python' element={<Python />} />
        <Route path='/reactjs' element={<Reactjs />} />
        <Route path='/sql' element={<Sql />} />
        <Route path='/excel' element={<Excel />} />
        <Route path='/git' element={<Git />} />
        <Route path='/numpy' element={<Numpy />} />
        <Route path='/pandas' element={<Pandas />} />
        {/* <Route path='/*' element={<Error />} /> */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
