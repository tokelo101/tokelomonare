import React from 'react';
import styles from './NavigationStyle.module.css'
import Projects from './Projects';
import Skills from './Skills';
import Main from './Main';
import {useState} from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Education from './Education';

const NavigationBar = () => {
  const [page, setPage] = useState("home");

  const NavStlye = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  };

  function OnPage(navPage){
      setPage(navPage);
      <Route path="/Education" component={Education} />
  }

  switch(page){
    case 'home':{

    }break;
    case 'about':{

    }break;
    case 'education':{

    }break;
    case 'skills':{

    }break;
    case 'projects':{

    }break;
    case 'contact':{

    }break;
  }
    return (

      
      <div className='row justify-content-center'>
        
        <div className='col-lg-9'>
        <div className={styles.navbar}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarNav" style={{fontSize:25 }}>
        <ul className="navbar-nav">
          <li className="nav-item" >
            <a className="btn btn-dark" href="/" onClick={OnPage}>Home</a>
          </li>
          <li className="nav-item" >
            <a className="btn" href="/" style={{fontSize:25}} >About</a>
          </li>
          <li className="nav-item">
            <a className="btn" href="/Education"  style={{fontSize:25}} >Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          
        </ul>
      </div>
    </nav>
      </div>          
        </div>
        <Main/>
        <Projects/>
        <Skills/>
      </div>

    
  );
};

export default NavigationBar;