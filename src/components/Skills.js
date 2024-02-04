import React, { Component } from 'react'
import './Skills.css'

export class Skills extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h1>Skills</h1>
                <h1>Backend</h1>
                    <div className='row justify-content-center'>
                    <div className='col-lg-4'>
                        <div class="card">
                            <img src="images/Skills/dotnetcore.png" class="card-img-top" alt="Card Image"></img>
                                <div class="card-body">
                                    <h5 class="card-title">ASP.Net</h5>
                                    <p class="card-text">I have a couple of projects made on ASP.Net framework</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div><div className='col-lg-4'>
                        <div class="card">
                            <img src="images/Skills/csharp2.jpg" class="card-img-top" alt="Card Image"></img>
                                <div class="card-body">
                                    <h5 class="card-title">C#</h5>
                                    <p class="card-text">99.9% of my backend code for web development is writen in C#</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div class="card">
                            <img src="images/Skills/java.png" class="card-img-top" alt="Card Image"  style={{height:250, width:150}}></img>
                                <div class="card-body">
                                    <h5 class="card-title">Java</h5>
                                    <p class="card-text">I have learned a lot of Computer Science concepts on Java</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div>
                    </div>
                    <h1>Database</h1>
                    <div className='row justify-content-center'>
                    <div className='col-lg-4'>
                        <div class="card" style={{width:250}}>
                            <img src="images/Skills/sqlserver.png" class="card-img-top" alt="Card Image"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card Title</h5>
                                    <p class="card-text">Some example text to show the content of the card.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div class="card" style={{width:250}}>
                            <img src="images/Skills/postgres.png" class="card-img-top" alt="Card Image"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card Title</h5>
                                    <p class="card-text">Some example text to show the content of the card.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div>
                    </div>
                    <h1>Frontend</h1>
                    <div className='row justify-content-center'>
                    <div className='col-lg-4'>
                        <div class="card" style={{width:250}}>
                            <img src="images/Skills/react3.png" class="card-img-top" alt="Card Image"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card Title</h5>
                                    <p class="card-text">Some example text to show the content of the card.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div class="card" style={{width:250}}>
                            <img src="images/Skills/html3.png" class="card-img-top" alt="Card Image"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card Title</h5>
                                    <p class="card-text">Some example text to show the content of the card.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div class="card" style={{width:250}}>
                            <img src="images/Skills/css2.png" class="card-img-top" alt="Card Image"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card Title</h5>
                                    <p class="card-text">Some example text to show the content of the card.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div class="card" style={{width:250}}>
                            <img src="images/Skills/javascript2.jpg" class="card-img-top" alt="Card Image"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card Title</h5>
                                    <p class="card-text">Some example text to show the content of the card.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div class="card" style={{width:250}}>
                            <img src="images/Skills/bootstrap2.png" class="card-img-top" alt="Card Image"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card Title</h5>
                                    <p class="card-text">Some example text to show the content of the card.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default Skills
