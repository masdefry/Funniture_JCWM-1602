import axios from 'axios';
import React from 'react';

class DetailProduct extends React.Component{

    state = {
        dataDetailProduct: null
    }

    componentDidMount(){
        let idProduct = this.props.location.pathname.split('/')[2]

        axios.get(`http://localhost:2000/products/${idProduct}`)
        .then((res) => {
            this.setState({dataDetailProduct: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    addToCart = () => {
        let idProduct = this.props.location.pathname.split('/')[2]
        let idUser = localStorage.getItem('id')

        let dataToSend = {
            idProduct: idProduct,
            idUser: idUser,
            quantity: 1
        }

        // Saya cek terlebih dahulu apakah product ini ada didalam data carts
        axios.get(`http://localhost:2000/carts?idProduct=${idProduct}`)
        .then((res) => {
            if(res.data.length === 0){ // Apabila datanya belum ada didalam data carts
                axios.post('http://localhost:2000/carts', dataToSend)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            }else{ // Apabila datanya udah ada didalam data carts
                let quantityOnDB = res.data[0].quantity
                let idCart = res.data[0].id
                
                axios.patch(`http://localhost:2000/carts/${idCart}`, {quantity: quantityOnDB + 1})
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })

        // axios.post('http://localhost:2000/carts', dataToSend)
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }

    render(){
        if(this.state.dataDetailProduct === null){
            return(
                <div>
                    Loading
                </div>
            )
        }
        return(
            <div className= "container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className='col-12'>
                                <img src={this.state.dataDetailProduct.image1} className="img-fluid" alt=""/>
                            </div>

                            <div className="col-3">
                                <img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/728/0172811_PE327002_S4.jpg" className="img-fluid furniture-img-thumb" alt=""/>
                            </div>
                            <div className="col-3">
                                <img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/728/0172811_PE327002_S4.jpg" className="img-fluid furniture-img-thumb" alt=""/>
                            </div>
                            <div className="col-3">
                                <img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/728/0172811_PE327002_S4.jpg" className="img-fluid furniture-img-thumb" alt=""/>
                            </div>
                        </div>
                        

                    </div>

                    <div className="col-12 col-md-6">
                        <div className="mt-5">
                            <h1>
                                {this.state.dataDetailProduct.name}
                            </h1>
                            <p className="font-italic">
                                Sold : 2 Products
                            </p>
                            <h3>
                                Rp. {this.state.dataDetailProduct.price}
                            </h3>
                            <hr/>
                        </div>

                        <div>
                            <p>
                                Stock : 20 items
                            </p>

                            <p>
                                Weight: 7 kg
                            </p>
                            <hr/>
                        </div>

                        <div>
                            <h5>
                                Category :
                            </h5>
                            <p>
                                Perabotan Kantor
                            </p>
                        </div>

                        <div className="mt-5 mb-3 d-flex justify-content-center">
                            <input type="button" value="Add To Cart" className="btn btn-primary" style={{width: "300px"}} onClick={this.addToCart} />
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default DetailProduct