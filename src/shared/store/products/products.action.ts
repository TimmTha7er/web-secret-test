import { createAsyncThunk } from '@reduxjs/toolkit'

import { ProductService } from '@/entities/products/services/ProductService'

const fetchData = createAsyncThunk<any, any>(
  'products/fetchData',
  async (url, thunkApi) => {
    try {
      const data = await ProductService.getProducts(url)

      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export { fetchData }
