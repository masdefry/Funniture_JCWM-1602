import axios from "axios"

export const getDataCart = (data, id) => {
    return(dispatch) => {
        axios.post('http://localhost:2000/carts', data)
        .then((res) => {
            axios.get(`http://localhost:2000/carts?idUser=${id}`)
            .then((res) => {

            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}