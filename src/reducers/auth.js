 const authReducer=(state={data:null},action)=>{
    switch (action.type) {
        case 'AUTH':
            // action.data is result of fetching data from api backend failed-->{message:"Email already exists, etc.."} success:{data,token,user,message}
            localStorage.setItem('Profile',JSON.stringify({...action?.data}))
            return {...state,data:action?.data}
        default:
            return state;
    }
}

export default authReducer