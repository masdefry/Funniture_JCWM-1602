import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className='bg-warning' style={{height: '50px'}}>
                <div className='container'>
                    <div className='row align-items-center' style={{height: '50px'}}>
                        <div className='col-2'>
                            <span>Logo</span>
                        </div>
                        <div className='col-5 d-none d-md-block'>
                            <span>Menu 1</span>
                            <span>Menu 2</span>
                            <span>Menu 3</span>
                        </div>
                        <div className='col-10 col-md-5'>
                            <div className='d-flex justify-content-end'>
                                <span>
                                    <input type="email" className="form-control d-none d-md-block" placeholder="name@example.com" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faShoppingBag} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='d-block d-md-none'>
                        <input type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                </div>
            </div>
        )
    }
}