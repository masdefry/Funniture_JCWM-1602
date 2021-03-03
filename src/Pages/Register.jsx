import React from 'react';
import PhoneNumberValidator from './../Supports/Functions/PhoneNumber'
import EmailValidator from './../Supports/Functions/Email'

export default class Register extends React.Component{

    state = {
        error: null
    }

    submitRegister = () => {
        let inputUser = this.refs.inputUser.value

        if(inputUser){
            // Apabila user masukan angka, maka bakalan menjalankan Phone Validation
            if(inputUser[0] >= 0){
                let resultPhoneValidator = PhoneNumberValidator(inputUser)
                console.log(resultPhoneValidator)
    
                if(resultPhoneValidator !== true){
                    this.setState({error: resultPhoneValidator})
                }else{
                    this.setState({error: null})
                }
            }else{
                // Apabila user masukan SELAIN angka, maka bakalan menjalankan Email Validation
                let resultEmailValidator = EmailValidator(inputUser)
                console.log(resultEmailValidator)
    
                if(resultEmailValidator !== true){
                    this.setState({error: 'Email Tidak Sesuai'})
                }else{
                    this.setState({error: null})
                }
            }
        }else{
            this.setState({error: 'Isi Semua Data'})
        }
    }

    render(){
        return(
            <div className='container'>
                <div className='row justify-content-center align-items-center' style={{height: '500px'}}>
                    <div className="col-10 px-5 pt-5 pb-5 border">
                        <h1>
                            Register
                        </h1>
                        <input type='text' ref='inputUser' placeholder='Enter your phone number / email' className='form form-control' onChange={this.submitRegister} />
                        <p className='text-warning funniture-font-size-18'>
                            {
                                this.state.error?
                                    this.state.error
                                :
                                    null
                            }
                        </p>
                        <input type='button' value='Register Account' className='btn btn-dark w-100 mt-3' onClick={this.submitRegister} />
                    </div>
                </div>
            </div>
        )
    }
}