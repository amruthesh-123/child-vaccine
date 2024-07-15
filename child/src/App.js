import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Helthcarereg from './Components/Helthcarereg';
import Admin from './Components/Admin';
import Parentreg from './Components/Parentreg';
import Parenthomepage from './Components/Parenthomepage';
import Childreg from './Components/Childreg';
import Addvaccine from './Components/Addvaccine';
import Home from './Components/Home';
import Healthhome from './Components/Healthhome';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/helthcarereg' element={<Helthcarereg />} />
      <Route path='/parentreg' element={<Parentreg />} />
      <Route path='/childreg' element={<Childreg />} />
      <Route path='/adminpage' element={<Admin />} />
      <Route path='/homepage' element={<Parenthomepage />} />
      <Route path='/addvaccine' element={<Addvaccine />} />
      <Route path='/' element={<Home />} />
      <Route path='/healthhome' element={<Healthhome />} />
      </Routes>
    </div>
  );
}

export default App;
