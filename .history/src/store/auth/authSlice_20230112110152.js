import { createSlice } from '@reduxjs/toolkit'

const initialState = {
status:'checking',
user:{},
errorMessage:undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking:(state,action)=>{
        state.status='checking';
        state.user={};
        state.errorMessage=undefined;
    },
    onLogin:(state,action)=>{
        state.status='authenticated';
        state.user=action.payload;
        state.errorMessage=undefined;
    }
  }
});

export const {aumentar} = authSlice.actions

export default authSlice