// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Profile from './Profile';
import Skill from './Skill'
import Project from './Project'
import Footer from './Footer'
import { useEffect } from 'react';
import What from './What';
import Tech from './Tech';

function App() {
  useEffect(()=>{
    document.title="Portfolio"
    
  },[])
  
  return (
    <div style={{maxWidth:'100vw'}}  className="App flex flex-col items-center justify-center">

      <div className=''>

      <Header/>

      <section id='Home'>
        <Home/>
      </section> 
      <section id='Profile'>
        <Profile/>
      </section>  
      <section id='Skill'>
        <Tech/>
        <Skill/>
      </section>
        <What/>
      <section id='Project'>
        <Project/>
      </section>

      <Footer/>
      </div>
    </div>
  );
}

export default App;
