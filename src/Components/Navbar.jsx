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
                this.setState({username: res.data.username})
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    onLogin = () => {
        let inputLogin = this.refs.inputLogin.value
        let inputPasswordLogin = this.refs.inputPasswordLogin.value
        let inputLoginType = ''

        if(inputLogin[0] >= 0){
            inputLoginType = 'phone'
        }else{
            inputLoginType = 'email'
        }

        Axios.get(LinkAPI + `?${inputLoginType}=${inputLogin}&password=${inputPasswordLogin}`)
        .then((res) => {
            if(res.data.length === 1){
                alert('Login Berhasil')
                localStorage.setItem('id', res.data[0].id)
                this.setState({showModal: false})
                window.location = '/'
            }else if(res.data.length !== 1){
                alert('User & Password Tidak Ditemukan')
            }
        })
        .catch((err) => {
            console.log(err)
        })
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
                                <span className='ml-3 funniture-font-size-18'><Link to='/products' className='funniture-link'>Products</Link></span>
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
                                    {
                                        this.state.username?
                                            <span className='d-none d-md-block'>
                                                <FontAwesomeIcon icon={faUser} className='funniture-font-size-22' />
                                            </span>
                                        :
                                            <span className='d-none d-md-block' onClick={() => this.setState({showModal: true})}>
                                                <FontAwesomeIcon icon={faUser} className='funniture-font-size-22' />
                                            </span>
                                    }
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
                    <ModalBody className='px-5 py-5'>
                        <div className='text-center'>
                            <h3>
                                Login Account
                            </h3>
                        </div>
                        <div className='mt-5'>
                            <input type='text' ref='inputLogin' placeholder='Phone Number / Email' className='form form-control' />
                        </div>
                        <div className='my-4'>
                            <input type='password' ref='inputPasswordLogin' placeholder='Password' className='form form-control' />
                        </div>
                        <div>
                            <input type='button' value='Login' className='btn btn-warning w-100' onClick={this.onLogin} />
                        </div>
                        <div className='mt-5 text-center'>
                            <p>
                                Don't have account? <Link to='/register'><span className='font-weight-bold'>Register here.</span></Link>
                            </p>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}