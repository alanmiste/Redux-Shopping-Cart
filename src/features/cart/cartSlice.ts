import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
    item: { [productID: string]: number }
}

const initialState: CartState = {
    item: {}
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<string>){
            const id = action.payload;
            if(state.item[id]){
                state.item[id]++
            } else{
                state.item[id] = 1
            }
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
