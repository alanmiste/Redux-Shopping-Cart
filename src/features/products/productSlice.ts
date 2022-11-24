import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../app/api";

export interface ProductState {
    products: { [id: string]: Product}
}

const initialState : ProductState ={
    products: {
        "111":{
            name: "test product"
        }
    }
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productsSlice.reducer;
