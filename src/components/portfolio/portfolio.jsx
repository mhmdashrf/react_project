import React, { PureComponent } from 'react'
import image1 from '../../images/image-card1.png'
import image2 from '../../images/image-card2.png'
import image3 from '../../images/image-card3.png'
import "./portfolio.css";


class Portfolio extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
     showLayer= (e)=> {
        let layerClick =document.querySelector('.layer-click');
        let src=''
        if (e.target.tagName == "I") {
           src = e.target.parentElement.previousElementSibling.children[0].src
        }else{
           src= e.target.previousElementSibling.children[0].src
        }
           let srcImgLayer = layerClick.children[0]
           srcImgLayer.src = src;
          layerClick.classList.remove('d-none');
     }
     hideLayer=(e)=>{
        let layerClick = document.querySelector('.layer-click');
        if (e.target.tagName != "IMG") {
        layerClick.classList.add('d-none');
        }
     }
    componentDidMount(){
     let firstImg = document.querySelectorAll('.firstImg ');
     let layerClick = document.querySelector('.layer-click');
     firstImg.forEach(item => {
     item.addEventListener('click', this.showLayer)
     });
     layerClick.addEventListener('click', this.hideLayer)
    }
    componentWillUnmount(){
        let firstImg = document.querySelectorAll('.firstImg ');
        let layerClick =document.querySelector('.layer-click');
        firstImg.forEach(item => {
            item.removeEventListener('click', this.showLayer);
        });
            layerClick.removeEventListener('click', this.hideLayer);
    }
    render() {
        return <>
        <section className='py-5'>
            <h1 className='text-center fw-bolder'>PORTFOLIO COMPONENT</h1>
            <i className='fa-solid fa-star d-flex  justify-content-center my-3'></i>
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-4">
                       <div className="firstImg position-relative">
                       <div className="img">
                        <img className='w-100' src={image1} alt='img1'/>
                        </div>
                        <div className='layer-img'>
                        <i className="fa-solid fa-plus text-white fs-1 fw-bolder"></i>
                        </div>
                       </div>
                    </div>
                    <div className="col-md-4">
                       <div className="firstImg position-relative">
                       <div className="img">
                        <img className='w-100' src={image2} alt='img1' />
                        </div>
                        <div className='layer-img'>
                        <i className="fa-solid fa-plus text-white fs-1 fw-bolder"></i>
                        </div>
                       </div>
                    </div>
                    <div className="col-md-4">
                       <div className="firstImg position-relative">
                       <div className="img">
                        <img className='w-100' src={image3} alt='img1'/>
                        </div>
                        <div className='layer-img'>
                        <i className="fa-solid fa-plus text-white fs-1 fw-bolder"></i>
                        </div>
                       </div>
                    </div>
                    <div className="col-md-4">
                       <div className="firstImg position-relative">
                       <div className="img">
                        <img className='w-100' src={image1} alt='img1' />
                        </div>
                        <div className='layer-img'>
                        <i className="fa-solid fa-plus text-white fs-1 fw-bolder"></i>
                        </div>
                       </div>
                    </div>
                    <div className="col-md-4">
                       <div className="firstImg position-relative">
                       <div className="img">
                        <img className='w-100' src={image2} alt='img1' />
                        </div>
                        <div className='layer-img'>
                        <i className="fa-solid fa-plus text-white fs-1 fw-bolder"></i>
                        </div>
                       </div>
                    </div>
                    <div className="col-md-4">
                       <div className="firstImg position-relative">
                       <div className="img">
                        <img className='w-100' src={image3} alt='img1' />
                        </div>
                        <div className='layer-img'>
                        <i className="fa-solid fa-plus text-white fs-1 fw-bolder"></i>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
         <div className="layer-click d-none">
            <img className='imgLayerClick' src={image1} alt=''/>
         </div>
        </>
    }
}

export default Portfolio