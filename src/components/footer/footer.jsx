import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import  "./footer.css";

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return <>
      <section className='secFooter py-5'>
      <div className='container '>
            <div className="row">
                <div className="col-md-4">
                    <div className="location text-white text-center">
                        <h2>LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="web text-center">
                        <h2 className='text-white'>AROUND THE WEB</h2>
                        <div className="icons-social  d-flex justify-content-center align-items-center mt-3">
                                <Link to={'https://www.facebook.com'}><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link to={'https://www.instagram.com'}><i className="fa-brands fa-instagram"></i></Link>
                                <Link to={'https://www.google.com'}><i className="fa-brands fa-google-plus-g"></i></Link>
                                <Link to={'https://www.twitter.com'}><i className="fa-brands fa-twitter"></i></Link>
                            </div>

                    </div>
                </div>
                <div className="col-md-4">
                     <div className="aboutFreeLancer text-white text-center">
                        <h2 >ABOUT FREELANCER</h2>
                        <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        
      </section>
      <div className="lastFooter  d-flex justify-content-center align-items-center">
            <p className=' text-white py-1 mt-2'>Copyright © Your Website 2024</p>
        </div>
        </>
            
        
    }
}

export default Footer