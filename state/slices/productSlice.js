import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    'products/getProducts', async (thunkApi) => {
        const response = await fetch('http://www.mocky.io/v2/5c3e15e63500006e003e9795');
        const formattedResponse = await response.json();
        return formattedResponse;
    }
);


export const productSlice = createSlice({
    name: 'products',
    initialState : {
    value: 0,
    products: [],
    isLoading: true,
    isPresent: false
},
    reducers: {
        addProduct: (state, action) => {
            state.products.products = [...state.products.products, action.payload];
            state.isPresent = true
        }, 
       removeProduct: (state, action) => {
           state.products.products = state.products.products.filter(product => product.name != action.payload);
       },
       editProduct: (state, action) => {
            const removedProduct = state.products.products.splice(action.payload.id -1, 1, action.payload);
            state.isPresent = true
       },
       editProductbackup: (state, action) => {
        //    console.log(action.payload);
           state.products.products = [...state.products.products, state.products.products.map(product => {
            if (product.id == action.payload.id) {
                return [{name: action.payload.name, prices: action.payload.prices}]
               }
           })];
       }
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        },
        [getProducts.rejected]: (state) => {
            state.isLoading = true;
        }
    },
    
});

export const {addProduct, removeProduct, editProduct} = productSlice.actions;
export default productSlice.reducer;