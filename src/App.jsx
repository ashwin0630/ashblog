import React from 'react'
import './App.css'
import Home from './components/Home';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogid' element={<BlogDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
