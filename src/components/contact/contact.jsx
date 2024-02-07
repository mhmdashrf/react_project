import React, { PureComponent } from 'react'
import  '../contact/contact.css';

class Contact extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return <>
        <section className='my-5'>
            <h1 className='text-center fw-bolder'>CONATCT SECTION</h1>
            <i className='fa-solid fa-star d-flex  justify-content-center my-3'></i>
            <form className='d-flex flex-column py-5'>
             <input className='w-50 mx-auto' type="text" placeholder='userName' />
             <input className='w-50 mx-auto my-5' type="text" placeholder='userAge' />
             <input className='w-50 mx-auto' type="text" placeholder='userEmail' />
             <input className='w-50 mx-auto my-5' type="text" placeholder='userPassword' />
             <div className='text-center'><button className='buttonSend' type='button'>Send Message</button></div>
            </form>
        </section>
        </>
    }
}

export default Contact