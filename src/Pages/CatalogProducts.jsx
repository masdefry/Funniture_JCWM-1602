import axios from 'axios';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CatalogProducts extends React.Component{

    state = {
        dataProducts: null,
        showModal: false,
        allCategory: null,
        allBrand: null
    }

    componentDidMount(){
        this.getDataProducts()
        this.getDataCatAndBrand()
    }

    getDataProducts = () => {
        axios.get('http://localhost:2000/products')
        .then((res) => {
            this.setState({dataProducts: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    getDataCatAndBrand = () => {
        axios.get('http://localhost:2000/products')
        .then((res) => {
            // Ambil category 
            let arrCategory = []

            res.data.forEach((value) => {
                if(arrCategory.includes(value.category)){

                }else{
                    arrCategory.push(value.category)
                }
            })

            // Ambil brand
            let arrBrand = []

            res.data.forEach((value) => {
                if(arrBrand.includes(value.brand)){

                }else{
                    arrBrand.push(value.brand)
                }
            })

            console.log(arrCategory)
            console.log(arrBrand)

            this.setState({allCategory: arrCategory, allBrand: arrBrand})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                {/* BANNER SECTION */}
                <div className='bg-primary' style={{height: '300px'}}>

                </div>

                {/* FILTER SECTION */}
                <div className='container'>
                    <div className="row my-5">
                        <div className="col-12">
                            <button type="button" class="btn btn-outline-warning" onClick={() => this.setState({showModal: true})}>Filter</button>
                            <button type="button" class="btn btn-outline-warning ml-3">Sort</button>
                        </div>
                    </div>
                </div>

                {/* CATALOG SECITON */}
                <div className="container" style={{height: '100%'}}>
                    <div className="row">
                        {
                            this.state.dataProducts?
                                this.state.dataProducts.map((value, index) => {
                                    return(
                                        <>
                                            <div className="col-4 px-3 py-3" key={index}>
                                                <div>
                                                    <img src={value.image1} width='100%' height='150px' />
                                                </div>
                                                <div>
                                                    <h5>
                                                        {value.name}
                                                    </h5>
                                                </div>
                                                <div>
                                                    <h5>
                                                        Rp.
                                                        {
                                                            value.diskon?
                                                                (value.price - (value.price * (value.diskon / 100))).toLocaleString()
                                                            :
                                                                value.price.toLocaleString()
                                                        }
                                                    </h5>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            :
                                null
                        }
                    </div>
                </div>

                {/* MODAL SECTION */}
                <Modal toggle={() => this.setState({showModal: false})} isOpen={this.state.showModal}>
                    <ModalBody className='px-5 py-5'>
                        <div className='text-center'>
                            <h3>
                                Filter Data
                            </h3>
                        </div>
                        <div className='mt-3'>
                            <label for="exampleFormControlSelect1">Category</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                {
                                    this.state.allCategory?
                                        this.state.allCategory.map((value, index) => {
                                            return(
                                                <option key={index}>{value}</option>
                                            )
                                        })
                                    :
                                        null
                                }
                            </select>
                        </div>
                        <div className='my-4'>
                            <label for="exampleFormControlSelect1">Brand</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                {
                                    this.state.allBrand?
                                        this.state.allBrand.map((value, index) => {
                                            return(
                                                <option key={index}>{value}</option>
                                            )
                                        })
                                    :
                                        null
                                }
                                </select>
                        </div>
                        <div>
                            <input type='button' value='Filter Data' className='btn btn-warning w-100' />
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}