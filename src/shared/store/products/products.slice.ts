import { createAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { AppState } from '..'
import { fetchData } from './products.action'

import { Brands, Product, Range } from '@/types/global'

interface ProductsState {
  data: {
    filters: {
      range: Range
      brands: Brands
    }
    products: Product[]
  }
  isLoading: boolean
  error: string
}

const initialState: ProductsState = {
  data: {
    filters: {
      range: {
        min: '',
        max: '',
        title: '',
      },
      brands: {
        title: '',
        items: [],
      },
    },
    products: [],
  },
  isLoading: true,
  error: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const hydrate = createAction<AppState>(HYDRATE)

    builder.addCase(hydrate, (state: ProductsState, action) => {
      return {
        ...state,
        ...action.payload[productsSlice.name],
      }
    })

    builder.addCase(
      fetchData.fulfilled.type,
      (state: ProductsState, action: PayloadAction<ProductsState['data']>) => {
        state.isLoading = false
        state.error = ''
        state.data = action.payload
      }
    )

    builder.addCase(fetchData.pending.type, (state: ProductsState) => {
      state.isLoading = true
      state.error = ''
      state.data = initialState.data
    })

    builder.addCase(
      fetchData.rejected.type,
      (state: ProductsState, action: PayloadAction<ProductsState['error']>) => {
        state.isLoading = false
        state.error = action.payload
        state.data = initialState.data
      }
    )
  },
})

export { productsSlice }
