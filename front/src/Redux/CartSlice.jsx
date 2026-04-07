import {createSlice} from '@reduxjs/toolkit'

let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addItem(state, action){
            state.push(action.payload)
        },
        removeItem(state, action){
            return state.filter(item=>item._id != action.payload._id);
        },
        removeAllItem(){
            return [];
        }
    }
})

export let {addItem, removeItem, removeAllItem} = CartSlice.actions;

export default CartSlice.reducer;