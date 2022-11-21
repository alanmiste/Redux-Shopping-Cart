import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
    item: { [productID: string]: number }
}

const initialState: CartState = {
    item: {}
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
});

export default cartSlice.reducer;
