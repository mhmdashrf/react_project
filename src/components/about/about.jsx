import React, { Component } from 'react'
import'./about.css'

class About extends Component {
  
    

    render() {
        return <>
        
        <section className='py-5 secAbout'>
           <div className="container text-white">
            <h1 className='text-center'>ABOUT COMPONENT</h1>
            <i className='fa-solid fa-star d-flex  justify-content-center my-3'></i>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="firstText pb-4">
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="secondText">
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </div>
                </div>
            </div>
           </div>

        </section>
        
        </>
            
    }
    
}

export default About