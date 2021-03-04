import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class LandingPage extends React.Component{
    render(){
        const settings = {
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false
          };
        return(
            <div>
                {/* JUMBOTRON SECTION */}
                <div className='d-flex align-items-center jumbotron-landing-page'>
                    <div className="container text-center text-md-left">
                        <h1 className='funniture-font-size-70'>
                            Sale Up To 20%
                        </h1>
                        <input type='button' className='btn btn-warning' value='Shop Now!' />
                    </div>
                </div>
                <div className='container text-center mt-5' style={{height: '300px'}}>
                    <h1>
                        Spesial Furniture Pilihan Dari Kami
                    </h1>
                    <p className='funniture-font-size-20'>
                        Dapatkan Furniture Pilihan Sesuai Dengan #NyamannyaKamu
                    </p>
                    <Slider {...settings}>
                        <div className='border border-black'>
                            <h3>1</h3>
                        </div>
                        <div className='border border-black'>
                            <h3>2</h3>
                        </div>
                        <div className='border border-black'>
                            <h3>3</h3>
                        </div>
                        <div className='border border-black'>
                            <h3>4</h3>
                        </div>
                        <div className='border border-black'>
                            <h3>5</h3>
                        </div>
                        <div className='border border-black'>
                            <h3>6</h3>
                        </div>
                        <div className='border border-black'>
                            <h3>6</h3>
                        </div>
                        <div className='border border-black'>
                            <h3>6</h3>
                        </div>
                        <div className='border border-black'>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}