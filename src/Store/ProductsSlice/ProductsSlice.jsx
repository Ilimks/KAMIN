import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    search:[]
}

export const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        getProducts:(state,action)=>{
            state.data = action.payload
        },

        searchProducts:(state,action)=>{
            state.search = state.data.filter((el)=>{
                return el.title.toUpperCase().includes(action.payload.toUpperCase())
            })
        }
        
    }
})


export const {getProducts, searchProducts} = ProductsSlice.actions
export default ProductsSlice.reducer