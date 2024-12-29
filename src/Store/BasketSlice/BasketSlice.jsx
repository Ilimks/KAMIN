import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket:JSON.parse(localStorage.getItem('basketItems')) || [],
}

export const BasketSlice = createSlice({
    name:'basket',
    initialState,
    reducers: {
        add:(state,action)=>{
            let find = state.basket.findIndex((el)=>el.id === action.payload.id)
            if(find>=0){
             state.basket = state.basket.map((el)=>{
                 if(el.id === action.payload.id){
                     return {...el,count:el.count+1}
                 }
                 else{
                     return el
                 }
             })
            }
            else{
             state.basket.push(action.payload)
            }
            localStorage.setItem('basketItems', JSON.stringify(state.basket));
        },

        plusCount:(state,action)=>{
            state.basket = state.basket.map((el)=>{
                if(el.id === action.payload.id){
                    return {...el,count:el.count+1}
                }else{
                    return el
                }
            })
        },

        minusCount:(state,action)=>{
            let find = state.basket.find(el=>el.id  === action.payload.id).count
            if(find === 1){
                state.basket = state.basket.filter((el)=>{
                    return el.id !== action.payload.id
                })
            }
            else{
                state.basket = state.basket.map((el)=>{
                    if(el.id === action.payload.id){
                        return {...el,count:el.count-1}
                    }
                    else{
                        return el
                    }
                })
            }
        },

        remove: (state, action) => {
            state.basket = state.basket.filter((el) => el.id !== action.payload);

            localStorage.setItem('basketItems', JSON.stringify(state.basket));
        },

        basketDel:(state,action)=>{
            state.basket = []
        }
        
    }
})


export const {add, basketDel, minusCount, plusCount, remove} = BasketSlice.actions
export default BasketSlice.reducer