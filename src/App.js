// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Profile from './Profile';
import Skill from './Skill'
import Project from './Project'
import Footer from './Footer'

function App() {
  return (
    <div className="App bg-white">

      <Header/>

      <section id='Home'>
        <Home/>
      </section> 
      <section id='Profile'>
        <Profile/>
      </section>  
      <section id='Skill'>
        <Skill/>
      </section>
      <section id='Project'>
        <Project/>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
