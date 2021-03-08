import React from 'react'
import axios from 'axios'

import swal from 'sweetalert';

export default class Cart extends React.Component{

    state = {
        dataCarts: null,
        dataProducts: null,
        totalItem: 0,
        totalPrice: 0
    }

    componentDidMount(){
        this.getDataCarts()
    }

    getDataCarts = () => {
        let id = localStorage.getItem('id')

        axios.get(`http://localhost:2000/carts?idUser=${id}`)
        .then((res) => {
            let linkURLToGetDataProduct = ''
            
            res.data.forEach((value, index) => {
                linkURLToGetDataProduct += `id=${value.idProduct}&`
            })
            res.data.sort((a, b) => {
                return a.idProduct - b.idProduct
            })

            this.setState({dataCarts: res.data})
            console.log(this.state.dataCarts)

            axios.get(`http://localhost:2000/products?${linkURLToGetDataProduct}`)
            .then((res) => {
                this.setState({dataProducts: res.data})
                
                this.getOrderSummary()
            })
            .catch((err) => {
                console.log(err)
            })
        })

        .catch((err) => {
            console.log(err)
        })
    }

    getOrderSummary = () => {
        let totalItem = 0
        let totalPrice = 0

        this.state.dataCarts.forEach((value, index) => {
            totalItem += value.quantity
            totalPrice += this.state.dataProducts[index].price * value.quantity
        })

        this.setState({totalItem: totalItem, totalPrice: totalPrice})
    }

    updateQuantityProduct = (button, idCart, quantity) => {
        let quantitySebelumnya = quantity
        let quantityTerbaru = 0

        if(button === 'Plus'){
            quantityTerbaru = quantitySebelumnya + 1
        }else{
            quantityTerbaru = quantitySebelumnya - 1
        }
        
        axios.patch(`http://localhost:2000/carts/${idCart}`, {quantity: quantityTerbaru})
        .then((res) => {
            if(res.status === 200){
                this.getDataCarts()
            }
        })  
        .catch((err) => {
            console.log(err)
        })
    }

    deleteProduct = (idCart) => {
        swal({
            title: "Are you sure want to delete this product?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if(willDelete){
                axios.delete(`http://localhost:2000/carts/${idCart}`)
                .then((res) => {
                    swal({
                        title: "Product delete succesfull!",
                        icon: "success",
                        button: "Ok",
                    });

                    this.getDataCarts()
                })
                .catch((err) => {
                    swal({
                        title: {err},
                        icon: "cancel",
                        button: "Ok",
                    });
                })
            } else {
              
            }
          });
    }

    render(){
        if(this.state.dataCarts === null || this.state.dataProducts === null){
            return(
                null
            )
        }

        return(
            <>
                <div className = 'bg-light'>
                    <div className ='container'>
                        <div className = 'row d-flex'>

                            {/* row kiri */}
                            <div className='col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
                                <div className='p-2 bg-white my-5'>
                                    <div className='col-12 mt-3'>
                                        <h3>
                                            Shopping Cart
                                        </h3>
                                        <hr/>
                                    </div>
                                    {
                                        this.state.dataCarts.map((value, index) => {
                                            return(
                                                <div className='row my-5'>
                                                    <div className ='col-4 '>
                                                        <img src={this.state.dataProducts[index].image1} className='ml-3' style={{height:'100%', width:'100%'}} />
                                                    </div>
                                                    <div className ='col-8'>
                                                        <div className='ml-3'>
                                                            <h4>{this.state.dataProducts[index].name}</h4>
                                                            <h5>Rp.{this.state.dataProducts[index].price.toLocaleString()}</h5>
                                                        </div>
                                                        <div>
                                                            <button disabled={value.quantity === 1? true : false} className='btn btn-warning px-1' onClick={() => this.updateQuantityProduct('Minus', value.id, value.quantity)}>
                                                                -
                                                            </button>
                                                            <span className='mx-4'>
                                                                {value.quantity}
                                                            </span>
                                                            <button disabled={value.quantity === this.state.dataProducts[index].stock? true : false} className='btn btn-warning px-1' onClick={() => this.updateQuantityProduct('Plus', value.id, value.quantity)}>
                                                                +
                                                            </button>
                                                        </div>
                                                        <div className='mt-3'>
                                                            <button className='btn btn-danger px-1' onClick={() => this.deleteProduct(value.id)}>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* row kanan */}
                            <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ' style={{height: '400px'}}>
                                <div className='p-2 bg-white mt-5'>
                                    <div className='col-12 mt-3'>
                                            <h3>
                                                Order Summary
                                            </h3>
                                            <hr/>
                                            <div className ='d-flex justify-content-between my-2'>
                                                <div>
                                                    Items Total
                                                </div>
                                                <div>
                                                    {this.state.totalItem} Item
                                                </div>
                                            </div>
                                            <hr/>
                                    </div>
                                    <div className='col-12'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <h5>Order Total</h5>
                                            </div>
                                            <div>
                                                <h5>Rp{this.state.totalPrice.toLocaleString()}</h5>
                                            </div>
                                        </div> 
                                    </div> 
                                    
                                    {/* Button here */}
                                    
                                </div>
                                <div className ='d-flex justify-content-center mt-4'>
                                        <div>
                                            <input type='button' value='Continue Shopping' className ='btn btn-outline-dark' />
                                        </div>
                                        <div className = 'ml-3'>
                                            <input type='button' value='Checkout' className ='btn btn-warning' />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}