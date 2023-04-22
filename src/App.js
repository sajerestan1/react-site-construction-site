import React from 'react';
import './App.css';
import './css/style.css';
import { Topbar } from './components/Topbar';
import Navbar from './components/Navbar';
import {Featured} from './components/Featured';
import { Carousel } from './components/Carousel';
import { About } from './components/About';
import { Fact } from './components/Fact';
import { Service } from './components/Service';
import { Video } from './components/Video';
import { Team } from './components/Team';
import { Faqs } from './components/Faqs';
import { Blog } from './components/Blog';

function App() {
  return (
    <>
      <div className='wrapper'>
        
        <Topbar/>
       <Navbar/>
      <Carousel/>
      <Featured/>
      <About/>
      <Fact/>
      <Service/>
      <Team/>
      <Faqs/>
      <Blog/>
      </div>
    </>
  );
}

export default App;
