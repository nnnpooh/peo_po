import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PeoPoMap from './components/PeoPoMap';
import Course from './components/Course';
import LayoutMain from './components/LayoutMain';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route index element={<Home />}></Route>
          <Route path='peo' element={<PeoPoMap />}></Route>
          <Route path='course' element={<Course />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
