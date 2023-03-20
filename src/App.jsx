import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  Outlet
} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Layout from './pages/Layout';

function App() {

  return (
   <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/counter' element={<Counter/>} exact/>
          <Route path='/about' element={<About/>} exact/>
        </Route>
    
      </Routes>

   </Router>
  )
}

export default App
