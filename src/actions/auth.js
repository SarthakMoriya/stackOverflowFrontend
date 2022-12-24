import * as api from '../api'
import { useNavigate } from 'react-router-dom'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const navigate=useNavigate();

        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data })
        navigate('/')
    } catch (err) {
        console.log(err.message);
    }
}
export const login = (authData, navigate) => async (dispatch) => {
    try {

        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data })
        navigate('/')
    } catch (err) {
        console.log(err);
    }
}