import React, { Component } from 'react'
import { useState } from 'react'
import Education from './Education';



const Projects=()=>{
    var [count, setCount] = useState(10);
    
    function OnAdd(){
        setCount(count+=1);
    }
    function OnDecrease(){
        setCount(count-=1);
    }
    function OnReset(){
        setCount(count=0);
    }
    
    return (
      <div>
        <Education count={count} />
        <button className='btn btn-success' style={{height:50, width:100, margin:5}} onClick={OnAdd}>Increase</button>
        <button className='btn btn-warning' style={{height:50, width:100, margin:5}}  onClick={OnReset}>Reset</button>
        <button className='btn btn-danger' style={{height:50, width:100, margin:5}}  onClick={OnDecrease}>Decrease</button>
        <h1 style={{color:'black' , backgroundColor:'silver'}}> {count}</h1>     
        

      </div>
    )
  }

export default Projects
