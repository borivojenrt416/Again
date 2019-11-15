import {UZMIISTORIJU} from './types'

export const uzmi=(id)=>dispatch=>{

    fetch(`http://localhost:4000/korisnici/uzmiProizvode/${id}`)
    .then(response=>response.json())
    .then(podatak=>dispatch({
        type:UZMIISTORIJU,
        payload: podatak.data
    }));      

}