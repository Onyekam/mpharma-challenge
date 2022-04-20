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
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
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

export const {increment, decrement, incrementByAmount, addProduct} = productSlice.actions;
export default productSlice.reducer;