import React, { PureComponent } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'




class Layout extends PureComponent {
   

  
    render() {
        return <>
       <Navbar/>
       
 
       <Outlet/>



         <Footer/>
        </>
            
        
    }
}

export default Layout