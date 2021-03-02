import React from 'react';
import PhoneNumberValidator from './../Supports/Functions/PhoneNumber'
import EmailValidator from './../Supports/Functions/Email'

export default class Register extends React.Component{

    submitRegister = () => {
        let inputUser = this.refs.inputUser.value

        if(inputUser[0] == 0){
            console.log(PhoneNumberValidator(inputUser))
        }else{
            console.log(EmailValidator(inputUser))
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
                </div>
            </div>
        )
    }
}