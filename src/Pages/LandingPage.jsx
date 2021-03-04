import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Axios from 'axios';
import LinkAPI from './../Supports/Constants/LinkAPI'

export default class LandingPage extends React.Component{

    state = {
        dataFlashSale: null
    }

    componentDidMount(){
         this.getDataProducts()
    }

    getDataProducts = () => {
        Axios.get('http://localhost:2000/products')
        .then((res) => {
            this.setState({dataFlashSale: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        const settingsDesktop = {
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false
        };

        const settingsMobile = {
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
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
                <div className='container text-center mt-5' style={{height: '300px', marginBottom: '350px'}}>
                    <h1>
                        Spesial Furniture Pilihan Dari Kami
                    </h1>
                    <p className='funniture-font-size-20'>
                        Dapatkan Furniture Pilihan Sesuai Dengan #NyamannyaKamu
                    </p>
                    {
                        this.state.dataFlashSale?
                            <>
                                <Slider {...settingsDesktop} className='d-none d-md-block'>
                                    {
                                        this.state.dataFlashSale.map((value, index) => {
                                            return(
                                                value.diskon?
                                                    <div className='px-3 py-3'>
                                                        <div className='bg bg-primary'>
                                                            <img src={value.image1} style={{width: '100%', height: '150px'}} />
                                                        </div>
                                                        <div className='text-left'>
                                                            <h5>
                                                                {value.name}
                                                            </h5>
                                                        </div>
                                                        <div className='text-left'>
                                                            <h5>
                                                                Rp.{(value.price - (value.price * (value.diskon / 100))).toLocaleString()} <del>{value.price}</del>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                :
                                                    null
                                            )
                                        })
                                    }
                                </Slider>
                                <Slider {...settingsMobile} className='d-block d-md-none'>
                                {
                                    this.state.dataFlashSale.map((value, index) => {
                                        return(
                                            value.diskon?
                                                <div className='px-3 py-3'>
                                                    <div className='bg bg-primary'>
                                                        <img src={value.image1} style={{width: '100%', height: '150px'}} />
                                                    </div>
                                                    <div className='text-left'>
                                                        <h5>
                                                            {value.name}
                                                        </h5>
                                                    </div>
                                                    <div className='text-left'>
                                                        <h5>
                                                            Rp.{(value.price - (value.price * (value.diskon / 100))).toLocaleString()} <del>{value.price}</del>
                                                        </h5>
                                                    </div>
                                                </div>
                                            :
                                                null
                                        )
                                    })
                                }
                            </Slider>
                            </>
                        :
                            <div>
                                <div class="spinner-border text-primary" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}