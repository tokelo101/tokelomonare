import React from "react";
import './Education.css';
import Projects from "./Projects";

const Education = ({count}) => {
    
    return (
        <div className="Education" style={{backgroundColor:"rgb(200,200,200,0.1)", color:"white" , fontSize:20, borderRadius:50, marginTop:100}}>
            <div className="row justify-content-center">
                <div className="col-lg-8">
            <h1>education</h1>

                <h3>BSc Computer Science & Informatics (Loading...)</h3>
                <p>University Of Johannesburg</p>

                <h3>First Year</h3>
                <h5 style={{backgroundColor:'rgb(200, 200, 200, 0.1)'}}> Average: {count}%</h5>
                <h3>Second Year</h3>
                <h5>Average: 79%</h5>
                <h3>Third Year</h3>
                <h5>Average: 75%</h5>
                <h3>Fourth Year</h3>
                <h5>Average: --%</h5>
                </div>
            </div>
        </div>

    )
}

export default Education