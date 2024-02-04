import react, { Component } from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Main from './components/Main';
import Education from './components/Education';
import React, {useState} from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';


function handleDisplay(){

  //setDisplay(true);
}

class App extends Component{
  render(){
    return (
      
      <div className="App">
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
          <NavigationBar/>
          {/* <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </Router>
           */}

           
          </div>
        </div>
      </div>
    );
  }
}

export default App;
