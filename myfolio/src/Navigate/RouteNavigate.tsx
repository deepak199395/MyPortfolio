import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home.tsx';
import Projects from '../Components/Projects.tsx';
import About from '../Components/About.tsx';
import Experince from '../Components/Experince.tsx';
import Contacts from '../Components/Contacts.tsx';
import Education from '../Components/Education.tsx';

const AppRoutes = () => {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experince" element={<Experince/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;  
