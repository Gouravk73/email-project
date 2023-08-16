import { createSlice } from '@reduxjs/toolkit'

const initialState ={
      email:localStorage.getItem('email')||'',
      idToken:localStorage.getItem('idToken')||'',
}

const LoginSlice= createSlice({
    name: 'login',
    initialState,
    reducers:{
        loginSuccess:(state,action)=>{
            state.email=action.payload.email;
            state.idToken=action.payload.idToken;
            localStorage.setItem("email",  action.payload.email)
            localStorage.setItem("token",  action.payload.idToken)
            console.log(state.email);
        }
    }

})
export const LoginSliceActions=LoginSlice.actions;
export default LoginSlice.reducer;