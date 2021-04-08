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
                            <div className="row container justify-content-center shadow pt-5 pb-5 mb-4" style={{borderRadius: '5px'}}>
                                <div className="col-4">
                                    <h5 style={{lineHeight: '5px'}}>Status :</h5>
                                    <h5>{value.status}</h5>
                                </div>
                                <div className="col-4 text-center border-left border-right">
                                    <p className='font-weight-bold' style={{lineHeight: '0px'}}>
                                        INV/3102021/1
                                    </p>
                                    <p>
                                        {value.cretedAt}
                                    </p>
                                </div>
                                <div className="col-4 text-right">
                                    {
                                        value.status === 'Unpaid'?
                                            <input type='button' value='Pay' className='btn btn-primary px-5 py-1' onClick={() => this.redirectPayment(value.id)} />
                                        :
                                            <input type='button' disabled value='Paid' className='btn btn-dark px-5 py-1' onClick={() => this.redirectPayment(value.id)} />
                                    }
                                </div>
                                {
                                    value.detail.map((value, index) => {
                                        return(
                                            <>
                                                <div className="col-2 mt-2">
                                                    {/* Image */}
                                                    <img src={value.productImage} width='100px' height='50px' />
                                                </div>
                                                <div className="col-6 mt-3">
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
                                                <div className="col-4 text-right mt-3">
                                                    {/* Total Price Per-Product */}
                                                    <p style={{lineHeight: '0px'}}>
                                                        Total Belanja
                                                    </p>
                                                    <h6 className='font-weight-bold'>
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