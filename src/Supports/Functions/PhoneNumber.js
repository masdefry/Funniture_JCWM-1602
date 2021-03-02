// PHONE NUMBER VALIDATION
// 1. Nomor harus diawali dengan 0
// 2. Nomor memiliki panjang minimal 9 digit & panjang maksimal 12 digit

function PhoneNumberValidator(inputPhoneNumber){
    let inputPhoneNumberStr = inputPhoneNumber.toString()

    if(inputPhoneNumberStr[0] !== '6' && inputPhoneNumberStr[1] !== '2') return 'Nomor Harus Diawali Dengan 62' 

    if(inputPhoneNumberStr.length >= 9 && inputPhoneNumberStr.length <= 13){{
        for(let i = 0; i < inputPhoneNumberStr.length; i++){
            if(Number(inputPhoneNumberStr[i]) <= 0){
                return 'Nomor Harus Berupa Angka'
            }else if(inputPhoneNumberStr[i] === ' '){
                return 'Nomor Tanpas Menggunakan Spasi'
            }
        }
    }}
}

console.log(PhoneNumberValidator('628121186000'))