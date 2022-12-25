import { createAsyncThunk } from '@reduxjs/toolkit'

import { ProductService } from '@/entities/products/services/ProductService'

const fetchData = createAsyncThunk(
  'products/fetchData',
  async (url: string, thunkApi) => {
    try {
      const data = await ProductService.getProducts(url)

      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export { fetchData }
