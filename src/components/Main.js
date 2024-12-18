import React from "react";
import profilePhoto from "../images/profilePhoto.jpg";

const Main=()=>{
    return(
        <div className="container">
            <div className="row justify-content-center">
                <h1>I am a <br></br>Software Developer</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                <a className="navbar-brand" href="/"><img src={profilePhoto} style={{height:250, width:250, borderRadius:250, marginTop:50}}></img></a>
                
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-12" style={{backgroundColor:"rgb(200,200,200,0.1)", color:"white", fontSize:20, borderRadius:50, marginTop:50} }>
                    <h1>Tokelo Monare</h1>
                    <p>Male</p>
                    <p>21</p>
                    <p>Asp.net, React</p>
                    <p>Java, C#, SQL</p>
                    <hr></hr>
                    <p>Computer Science Student at UJ, Aspiring Software Developer,Attentive to detail
                        <br></br>
                        problem solver, critical thinker
                        <br></br>
                        Database design, Software Engineering principles, design patterns, Web development
                        <br></br>
                        Proficient in Asp.net (C#) , React Js , Java , HTML, CSS , SQL
                        </p>

                </div>
                </div>
            <div className="row">
                
            </div>
        </div>
    )
};

export default Main