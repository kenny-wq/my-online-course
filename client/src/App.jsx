import { useState } from 'react'
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>} />
          <Route path='register' element={<Register/> } />
          <Route path='login' element={<Login/> } />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App