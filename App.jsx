
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './compinents/Home';
import About from './compinents/About';
import Experience from './compinents/Experience';
import Project from './compinents/Project';
import Navbar from './pages/Navbar';
import Profile from './compinents/Profile';

function App() {
  
  return (

    <BrowserRouter>
       <Navbar/>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/experience' element={<Experience/>}/>
      {/* <Route path='/project' element={<Project/>}/>
      <Route path='/profile' element={<Profile/>}/> */}

 



      </Routes>




    </div>
    </BrowserRouter>
  );
}

export default App;
