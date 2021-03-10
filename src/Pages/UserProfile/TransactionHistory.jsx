import axios from 'axios'
import React from 'react'

export default class TransactionHistory extends React.Component{

    state = {
        dataTransaction: null
    }

    componentDidMount(){
        this.getDataTransactions()
    }

    getDataTransactions = () => {
        let idUSer = localStorage.getItem('id')

        axios.get(`http://localhost:2000/transactions?idUser=${idUSer}`)
        .then((res) => {
            this.setState({dataTransaction: res.data})
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    redirectPayment = (idTransaction) => {
        window.location = '/checkout/' + idTransaction
    }

    render(){
        if(this.state.dataTransaction === null){
            return(
                <div>
                    Loading
                </div>
            )
        }
        return(
            <div className='container mt-3'>
                {
                    this.state.dataTransaction.map((value, index) => {
                        return(
                            <div className="row shadow py-4 mb-3">
                                <div className="col-4">
                                    <h5 style={{lineHeight: '5px'}}>Status :</h5>
                                    <p>{value.status}</p>
                                </div>
                                <div className="col-4 text-center border-left border-right">
                                    <p>
                                        INV/3102021/1
                                    </p>
                                    <p>
                                        {value.cretedAt}
                                    </p>
                                </div>
                                <div className="col-4 text-right">
                                    {
                                        value.status === 'Unpaid'?
                                            <input type='button' value='Pay Now' className='btn btn-primary' onClick={() => this.redirectPayment(value.id)} />
                                        :
                                            null
                                    }
                                </div>
                                {
                                    value.detail.map((value, index) => {
                                        return(
                                            <>
                                                <div className="col-2 mt-3 mb-4">
                                                    {/* Image */}
                                                    <img src={value.productImage} width='100px' height='50px' />
                                                </div>
                                                <div className="col-6 mt-3 mb-4">
                                                    {/* Detail Product */}
                                                    <h6 style={{lineHeight: '5px'}}>
                                                        {
                                                            value.productName
                                                        }
                                                    </h6>
                                                    <p>
                                                        {value.productQuantity} Item x Rp.{value.productPrice.toLocaleString('id-ID')}
                                                    </p>
                                                </div>
                                                <div className="col-4 text-right mt-3 mb-4">
                                                    {/* Total Price Per-Product */}
                                                    <p>
                                                        Total Belanja
                                                    </p>
                                                    <h6>
                                                        Rp.{(value.productQuantity * value.productPrice).toLocaleString('id-ID')}
                                                    </h6>
                                                </div>
                                                <div className='col-12 border-bottom'>
                                                    
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}