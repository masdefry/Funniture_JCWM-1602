import React from 'react'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';

class ProductManagement extends React.Component{

    state = {
        data: null
    }

    componentDidMount(){
        this.getData()
    }


    getData = () => {
        axios.get('http://localhost:5000/products')
        .then((res) => {
            this.setState({data: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        if(this.state.data === null){
            return(
                <div className="container">
                    Loading . . .
                </div>
            )
        }

        return(
            <div className="container">
                <table className="table my-5">
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
                                            <FontAwesomeIcon icon={faSearch} className='funniture-font-size-22' />
                                            <FontAwesomeIcon icon={faTrash} className='funniture-font-size-22 mx-3' />
                                            <FontAwesomeIcon icon={faEdit} className='funniture-font-size-22' />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductManagement