import logo from './logo.svg';
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
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Home />

      <Routes>
        <Route path='/html' element={<Html />}></Route>
        <Route path='/css' element={<Css />}></Route>
        <Route path='/angular' element={<Angular />}></Route>
        <Route path='/django' element={<Django />}></Route>
        <Route path='/express' element={<Express />}></Route>
        <Route path='/java' element={<Java />}></Route>
        <Route path='/csharp' element={<Csharp />}></Route>
        <Route path='/dsa' element={<Dsa />}></Route>
        <Route path='/javascript' element={<Javascript />}></Route>
        <Route path='/mongodb' element={<Mongodb />}></Route>
        <Route path='/nodejs' element={<Nodejs />}></Route>
        <Route path='/powerbi' element={<Powerbi />}></Route>
        <Route path='/python' element={<Python />}></Route>
        <Route path='/reactjs' element={<Reactjs />}></Route>
        <Route path='/sql' element={<Sql />}></Route>
        <Route path='/excel' element={<Excel />}></Route>
        <Route path='/git' element={<Git />}></Route>
        <Route path='/numpy' element={<Numpy />}></Route>
        <Route path='/pandas' element={<Pandas />}></Route>
        <Route path='*' element={<Error />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
