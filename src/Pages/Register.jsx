import React from 'react';
import PhoneNumberValidator from './../Supports/Functions/PhoneNumber'
import EmailValidator from './../Supports/Functions/Email'

export default class Register extends React.Component{

    state = {
        error: null
    }

    submitRegister = () => {
        let inputUser = this.refs.inputUser.value

        if(inputUser[0] == 0){
            let resultPhoneValidator = PhoneNumberValidator(inputUser)
            console.log(resultPhoneValidator)

            if(resultPhoneValidator !== true){
                this.setState({error: resultPhoneValidator})
            }
        }else{
            let resultEmailValidator = EmailValidator(inputUser)
            console.log(resultEmailValidator)

            if(resultEmailValidator !== true){
                this.setState({error: 'Emial Tidak Sesuai'})
            }
        }

    }

    render(){
        return(
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center border border-grey' style={{height: '300px'}}>
                    <h1>
                        Register
                    </h1>
                    <input type='text' ref='inputUser' placeholder='Enter your phone number / email' className='form form-control' />
                    <input type='button' value='Register' onClick={this.submitRegister} />
                    <p>
                        {
                            this.state.error?
                                this.state.error
                            :
                                null
                        }
                    </p>
                </div>
            </div>
        )
    }
}