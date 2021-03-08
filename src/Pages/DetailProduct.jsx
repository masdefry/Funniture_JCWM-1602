import axios from 'axios';
import React from 'react';

class DetailProduct extends React.Component{

    state = {
        dataDetailProduct: null,
        mainImage: null
    }

    componentDidMount(){
        let idProduct = this.props.location.pathname.split('/')[2]

        axios.get(`http://localhost:2000/products/${idProduct}`)
        .then((res) => {
            this.setState({dataDetailProduct: res.data})
            this.setState({mainImage: res.data.image1})
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

                    let urlAddress = this.props.location.pathname
                    window.location = urlAddress
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

                    let urlAddress = this.props.location.pathname
                    window.location = urlAddress
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        if(this.state.dataDetailProduct === null){
            return(
                <div>
                    
                </div>
            )
        }
        return(
            <div className= "container my-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row justify-content-center">
                            <div className='col-12'>
                                <img src={this.state.mainImage} className="img-fluid" alt=""/>
                            </div>
                            
                            <div className="col-3 mt-4">
                                <img src={this.state.dataDetailProduct.image1} className="img-fluid furniture-img-thumb" alt="" onClick={() => this.setState({mainImage: this.state.dataDetailProduct.image1})} />
                            </div>
                            <div className="col-3 mt-4">
                                <img src={this.state.dataDetailProduct.image2} className="img-fluid furniture-img-thumb" alt="" onClick={() => this.setState({mainImage: this.state.dataDetailProduct.image2})}/>
                            </div>
                            <div className="col-3 mt-4">
                                <img src={this.state.dataDetailProduct.image3} className="img-fluid furniture-img-thumb" alt="" onClick={() => this.setState({mainImage: this.state.dataDetailProduct.image3})}/>
                            </div>
                        </div>
                        

                    </div>

                    <div className="col-12 col-md-6">
                        <div className='mt-5 mt-md-0'>
                            <h1>
                                {this.state.dataDetailProduct.name}
                            </h1>
                            <p>
                                Sold : 0 Products
                            </p>
                            <h3>
                                Rp.{this.state.dataDetailProduct.price.toLocaleString()}
                            </h3>
                            <hr/>
                        </div>
                        <div className='mt-4'>
                            <p className='font-weight-bold' style={{lineHeight: '0px'}}>
                                Stock
                            </p>
                            <p>
                                {this.state.dataDetailProduct.stock} Item
                            </p>
                            <p className='font-weight-bold' style={{lineHeight: '0px'}}>
                                Weight
                            </p>
                            <p>
                                {this.state.dataDetailProduct.weight} Gram
                            </p>
                            <hr/>
                        </div>
                        <div>
                            <p className='font-weight-bold' style={{lineHeight: '0px'}}>
                                Description
                            </p>
                            <p style={{textAlign: 'justify'}}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ut perferendis ducimus doloribus maiores voluptatem ea similique perspiciatis, sunt ad iusto fugiat, veritatis possimus unde, minus omnis quia quae vel.
                            </p>
                        </div>
                        <div className='mt-5'>
                            <button type="button" class="w-100 btn btn-warning" onClick={this.addToCart}>Add To Cart</button>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default DetailProduct