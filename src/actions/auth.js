import * as api from '../api'
import  setCurrentuser  from './currentUser'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentuser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (err) {
        console.log(err.message);
    }
}
export const login = (authData, navigate) => async (dispatch) => {
    try {

        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentuser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (err) {
        console.log(err);
    }
}