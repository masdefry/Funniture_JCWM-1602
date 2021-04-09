import React from 'react'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {Modal, ModalBody} from 'reactstrap'

class ProductManagement extends React.Component{

    state = {
        data: null,
        category: null,
        showModal: false
    }

    componentDidMount(){
        this.getData()
        this.getDataCategory()
    }


    getData = () => {
        axios.get('http://localhost:5000/products')
        .then((res) => {
            this.setState({data: res.data.data})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    getDataCategory = () => {
        axios.get('http://localhost:5000/category-product')
        .then((res) => {
            this.setState({category: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onSubmitData = () => {

        let dataToSend = {
            name: this.name.value,
            brand: this.brand.value,
            category: this.category.value,
            stock: this.stock.value,
            price: this.price.value,
            discount: this.discount.value,
            weight: this.weight.value,
            image1: this.image1.value,
            image2: this.image2.value,
            image3: this.image3.value
        }

        axios.post('http://localhost:5000/post-data-product', dataToSend)
        .then((res) => {
            alert(res.data.message)
            window.location = '/'
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        if(this.state.data === null || this.state.category === null){
            return(
                <div className="container">
                    Loading . . .
                </div>
            )
        }

        return(
            <div className="container">
                <div className='mt-3'>
                    <input type='button' value='Tambah Data' onClick={() => this.setState({showModal: true})} className='btn btn-warning' />
                </div>
                <table className="table mt-3 mb-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Category</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((value, index) => {
                                return(
                                    <tr>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.name}</td>
                                        <td>{value.brand}</td>
                                        <td>{value.category}</td>
                                        <td>{value.stock}</td>
                                        <td>{value.price}</td>
                                        <td>{value.discount}</td>
                                        <td>{value.weight}</td>
                                        <td>
                                            <Link to={`/product-management-detail/${value.id}`}>
                                                <FontAwesomeIcon icon={faSearch} className='funniture-font-size-22' />
                                            </Link>
                                            <FontAwesomeIcon icon={faTrash} className='funniture-font-size-22 mx-3' />
                                            <FontAwesomeIcon icon={faEdit} className='funniture-font-size-22' />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <Modal toggle={() => this.setState({showModal: false})} isOpen={this.state.showModal}>
                    <ModalBody>
                        <div className='mt-3'>
                            <h3>
                                Tambah Data
                            </h3>
                        </div>
                        <div>
                            <input type='text' ref={(e) => this.name = e} placeholder='Name of Product' className='form form-control mb-3' />
                        </div>
                        <div>
                            <input type='text' ref={(e) => this.brand = e} placeholder='Brand of Product' className='form form-control mb-3' />
                        </div>
                        <div>
                            <select ref={(e) => this.category = e} className="form-control mb-3">
                                {
                                    this.state.category.map((value, index) => {
                                        return(
                                            <option key={index} value={value.id}>{value.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <input type='text' ref={(e) => this.stock = e} placeholder='Stock of Product' className='form form-control mb-3' />
                        </div>
                        <div>
                            <input type='text' ref={(e) => this.price = e} placeholder='Price of Product' className='form form-control mb-3' />
                        </div>
                        <div>
                            <input type='text' ref={(e) => this.discount = e} placeholder='Discount of Product' className='form form-control mb-3' />
                        </div>
                        <div>
                            <input type='text' ref={(e) => this.weight = e} placeholder='Weight of Product' className='form form-control mb-3' />
                        </div>
                        <div>
                            <h5>Image URL</h5>
                            <input type='text' ref={(e) => this.image1 = e} placeholder='Image URL 1' className='form form-control mb-3' />
                            <input type='text' ref={(e) => this.image2 = e} placeholder='Image URL 2' className='form form-control mb-3' />
                            <input type='text' ref={(e) => this.image3 = e} placeholder='Image URL 3' className='form form-control mb-3' />
                        </div>
                        <div>
                            <input type='button' onClick={() => this.onSubmitData()} value='Submit Data' className='btn btn-primary w-100 mb-3' />
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ProductManagement