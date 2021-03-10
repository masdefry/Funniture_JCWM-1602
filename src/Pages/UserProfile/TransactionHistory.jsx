import React from 'react'

export default class TransactionHistory extends React.Component{
    render(){
        return(
            <div className='container mt-3'>
                <div className="row shadow py-4 mb-3">
                    <div className="col-4">
                        <h5 style={{lineHeight: '5px'}}>Status :</h5>
                        <p>Unpaid</p>
                    </div>
                    <div className="col-4 text-center border-left border-right">
                        <p>
                            3 Mar 2021 09:18 WIB
                        </p>
                    </div>
                    <div className="col-4 text-right">
                        <input type='button' value='Pay Now' className='btn btn-primary' />
                    </div>
                    <div className="col-2 mt-3 mb-4">
                        {/* Image */}
                        <img src='https://cdn-m2.fabelio.com/catalog/product/s/e/set_sofa_bran_2_1_dudukan.png?auto=format&w=1678&ixlib=react-9.0.3' width='100px' height='50px' />
                    </div>
                    <div className="col-6 mt-3 mb-4">
                        {/* Detail Product */}
                        <h6 style={{lineHeight: '5px'}}>
                            Sofa Bran 2+1 
                        </h6>
                        <p>
                            1 Item x Rp.2000.000.00
                        </p>
                    </div>
                    <div className="col-4 text-right mt-3 mb-4">
                        {/* Total Price Per-Product */}
                        <p>
                            Total Belanja
                        </p>
                        <h6>
                            Rp.2000.000.00
                        </h6>
                    </div>
                </div>

                <div className="row shadow py-4 mb-3">
                    <div className="col-4">
                        <h5 style={{lineHeight: '5px'}}>Status :</h5>
                        <p>Unpaid</p>
                    </div>
                    <div className="col-4 text-center border-left border-right">
                        <p>
                            3 Mar 2021 09:18 WIB
                        </p>
                    </div>
                    <div className="col-4 text-right">
                        <input type='button' value='Pay Now' className='btn btn-primary' />
                    </div>
                    <div className="col-2 mt-3 mb-4">
                        {/* Image */}
                        <img src='https://cdn-m2.fabelio.com/catalog/product/s/e/set_sofa_bran_2_1_dudukan.png?auto=format&w=1678&ixlib=react-9.0.3' width='100px' height='50px' />
                    </div>
                    <div className="col-6 mt-3 mb-4">
                        {/* Detail Product */}
                        <h6 style={{lineHeight: '5px'}}>
                            Sofa Bran 2+1 
                        </h6>
                        <p>
                            1 Item x Rp.2000.000.00
                        </p>
                    </div>
                    <div className="col-4 text-right mt-3 mb-4">
                        {/* Total Price Per-Product */}
                        <p>
                            Total Belanja
                        </p>
                        <h6>
                            Rp.2000.000.00
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}