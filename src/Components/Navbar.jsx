import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHeart, faUser, faSearchLocation, faBars } from '@fortawesome/free-solid-svg-icons';
import LinkAPI from './../Supports/Constants/LinkAPI'
import Axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Navbar extends React.Component{

    state = {
        username: null,
        showModal: false
    }

    componentDidMount(){
        this.getUsername()
    }

    getUsername = () => {
        // Ambil ID dari local storage
        let id = localStorage.getItem('id')

        if(id){
            Axios.get(LinkAPI + `/${id}`)
            .then((res) => {
                console.log(res)
                this.setState({username: res.data.username})
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    onLogin = () => {
        // Axios.get
    }

    onLogout = () => {
        let confirm = window.confirm('Anda Yakin Mau Logout?')

        if(confirm){
            localStorage.removeItem('id')
            window.location = '/'
        }
    }

    render(){
        return(
            <>
                <div className='funniture-bg-light-grey' style={{height: '50px'}}>
                    <div className="container">
                        <div className="row align-items-center" style={{height: '50px'}}>
                            <div className='col-12 col-md-6'>
                                <span>
                                    <FontAwesomeIcon icon={faSearchLocation} /> Lokasi Terdekat Dengan Anda
                                </span>
                            </div>
                            <div className='col-md-6 d-none d-md-block text-right'>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search your item" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-warning' style={{height: '65px'}}>
                    <div className='container'>
                        <div className='row align-items-center' style={{height: '65px'}}>
                            <div className='col-2'>
                                <span className='font-weight-bold funniture-font-size-30'>
                                    <Link to='/' className='funniture-link'>
                                        funniture
                                    </Link>
                                </span>
                            </div>
                            <div className='col-5 d-none d-md-block'>
                                <span className='ml-3 funniture-font-size-18'>Products</span>
                                <span className='mx-3 funniture-font-size-18'>Showroom</span>
                                <span className='funniture-font-size-18'>Sale</span>
                            </div>
                            <div className='col-10 col-md-5'>
                                <div className='d-flex justify-content-end align-items-center'>
                                    <span className='funniture-font-size-18'>
                                        {
                                            this.state.username?
                                                `Hello, ${this.state.username}`
                                            :
                                                null
                                        }
                                    </span>
                                    <span className='ml-1 mr-3 font-weight-bold funniture-font-size-18 funniture-clickable-element' onClick={this.onLogout}>
                                        {
                                            this.state.username?
                                                `/ Logout`
                                            :
                                                null
                                        }
                                    </span>
                                    <span className='d-none d-md-block' onClick={() => this.setState({showModal: true})}>
                                        <FontAwesomeIcon icon={faUser} className='funniture-font-size-22' />
                                    </span>
                                    <span className='mx-3 d-none d-md-block'>
                                        <FontAwesomeIcon icon={faHeart} className='funniture-font-size-22' />
                                    </span>
                                    <span className='d-none d-md-block'>
                                        <FontAwesomeIcon icon={faShoppingBag} className='funniture-font-size-22' />
                                    </span>
                                    <span className='d-block d-md-none'>
                                        <FontAwesomeIcon icon={faBars} className='funniture-font-size-22' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* MODAL SECTION */}
                <Modal toggle={() => this.setState({showModal: false})} isOpen={this.state.showModal}>
                    <ModalHeader>Modal title</ModalHeader>
                        <ModalBody>
                            <div>
                                <input type='text' placeholder='Masukan phone number / email' className='form form-control' />
                            </div>
                            <div>
                                <input type='password' placeholder='Masukan password' className='form form-control' />
                            </div>
                            <div>
                                <input type='button' value='Login' className='btn btn-warning' />
                            </div>
                        </ModalBody>
                    <ModalFooter>
                        
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}