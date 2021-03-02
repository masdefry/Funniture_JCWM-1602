import userEvent from '@testing-library/user-event';
import React from 'react';

export default class Register extends React.Component{

    submitRegister = () => {
        let inputUser = this.refs.inputUser.value

        if(inputUser[0] !== '0') console.log('Nomor Harus Diawali Dengan 0') 

        if(inputUser.length >= 9 && inputUser.length <= 12){
            for(let i = 0; i < inputUser.length; i++){
                if(!(inputUser[i] >= 0)){
                    console.log('Nomor Harus Berupa Angka')
                    break;
                }else if(inputUser[i] == ' '){
                    console.log('Nomor Tanpa Spasi')
                    break;
                }else{
                    console.log('Nomor Sudah Benar')
                }
            }
        }else{
            console.log('Nomor Harus 9-12 Digit')
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