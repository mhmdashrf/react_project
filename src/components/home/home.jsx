import React, { PureComponent } from 'react'
import myimage from'../../images/image-card1.svg'
import './home.css'

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return <>
       <section className ='homeSection'>
       <div className ="container">
            <div className ="content d-flex justify-content-center align-items-center flex-column py-5 text-white">
             <div className='parentImg'><img className ='w-100 py-3' src= {myimage} alt="" /></div>
                <h1 className ='homeH1'>START FRAMEWORK</h1>
                <i className ='fa-solid fa-star d-flex  justify-content-center my-3'></i>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            
               
            </div>
        </div>
        
       </section>
        
        
        </>
            
        
    }
}

export default Home