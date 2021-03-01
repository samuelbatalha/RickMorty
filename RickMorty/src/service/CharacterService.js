import api from './api'
import axios from "axios";

export const GET_CHARACTER_LIST = () =>{
    const url = '/character'
 return api.get(url)
}

export const GET_CHARACTER = (_id) =>{
    const url = `/character/${_id}`
 return api.get(url)
}

export const NEXT_OR_PREVIUS =(url)=>{
    const service = axios.create({baseURL: url});
    return service.get()
}