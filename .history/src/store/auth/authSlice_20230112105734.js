import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    aumentar:(state,action)=>{

    }
  }
});

export const {aumentar} = authSlice.actions

export default authSlice