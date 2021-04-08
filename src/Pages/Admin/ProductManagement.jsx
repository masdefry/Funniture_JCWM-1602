import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';

class ProductManagement extends React.Component{
    render(){
        return(
            <div className="container">
                <table class="table my-5">
                    <thead class="thead-dark">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Sofa</td>
                            <td>Olympic</td>
                            <td>1</td>
                            <td>100</td>
                            <td>1000000</td>
                            <td>90%</td>
                            <td>1000</td>
                            <td>
                                <FontAwesomeIcon icon={faSearch} className='funniture-font-size-22' />
                                <FontAwesomeIcon icon={faTrash} className='funniture-font-size-22 mx-3' />
                                <FontAwesomeIcon icon={faEdit} className='funniture-font-size-22' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductManagement