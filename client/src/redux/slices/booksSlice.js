import {createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import * as api from "../../api"



// our initial state
const initialState = {
    books : [],
    status: 'idle', // idle | loading | succeeded | failed
    message:''
}

// get all books from database
export const getAllBooks = createAsyncThunk(
    'books/getAllBooks',
    async (books,  thunkAPI) => {
      try {
        return api.getAllBooks()
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
)


export const booksSlice = createSlice(
    {
        name:'books',
        initialState,
        reducers:{

        }, 
        extraReducers: (builder) =>{
            builder
            .addCase(getAllBooks.pending , (state)=>{
                state.status='loading'
            })
            .addCase(getAllBooks.fulfilled , (state, action)=>{
                state.status = 'succeeded'
                state.books = action.payload.data.rows
            })
            .addCase(getAllBooks.rejected , (state, action)=>{
                state.status='failed'
                state.message = action.payload
                state.books=[]
            })
           
        }
    }
)


export const selectAllBooks = state => state.books
export default booksSlice.reducer
