import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PeoPoMap from './peopomapping/PeoPoMap';
import CourseData from './courseedit/CourseData';
import LayoutMain from './components/LayoutMain';
import Peoapp from './peomapping/Peoapp';
import Poapp from './pomapping/Poapp';
import Coapp from './comapping/Coapp'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route index element={<Home />}></Route>
          <Route path='peopomapping' element={<PeoPoMap />}></Route>
          <Route path='coursedata' element={<CourseData />}></Route>
          <Route path='peodata' element={<Peoapp />}></Route>
          <Route path='podata' element={<Poapp />}></Route>
          <Route path='codata' element={<Coapp />}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
