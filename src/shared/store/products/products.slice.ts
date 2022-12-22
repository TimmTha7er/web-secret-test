import { createAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '..'
import { fetchData } from './products.action'

interface ProductsState {
  data: []
  isLoading: boolean
  error: string
}

const initialState: ProductsState = {
  data: [],
  isLoading: true,
  error: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const hydrate = createAction<AppState>(HYDRATE)

    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload[productsSlice.name],
      }
    })

    builder.addCase(
      fetchData.fulfilled.type,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = ''
        state.data = action.payload
      }
    )

    builder.addCase(fetchData.pending.type, (state) => {
      state.isLoading = true
      state.error = ''
      state.data = []
    })

    builder.addCase(
      fetchData.rejected.type,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
        state.data = []
      }
    )
  },
})

export { productsSlice }
