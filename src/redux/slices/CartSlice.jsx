import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //add
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            console.log("removed function called from cart slice")
            return state.filter((item) => item.id !==action.payload);
        },
        reset:(state)=>{
            return [];
        } 

    }
})

export const {add,remove,reset} = cartSlice.actions
export default cartSlice.reducer;