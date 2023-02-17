import { createSlice } from "@reduxjs/toolkit";
import data from "../../Data/Datas";

const {productItems} = data



const productSlice = createSlice({
    name:'product',
    initialState: productItems
})

export default productSlice.reducer;