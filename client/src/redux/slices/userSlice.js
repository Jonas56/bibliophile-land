import {createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import * as api from "../../api"



// our initial state
const initialState = {
    readBooks : {
        list: [],
        status: 'idle',
        message:''
    },
    status: 'idle', // idle | loading | succeeded | failed
    
}

// get all books from database
export const getReadBooks = createAsyncThunk(
    'books/getReadBooks',
    async (books,  thunkAPI) => {
      try {
        return api.getReadBooks()
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


export const userSlice = createSlice(
    {
        name:'user',
        initialState,
        reducers:{

        }, 
        extraReducers: (builder) =>{
            builder
            .addCase(getReadBooks.pending , (state)=>{
                state.readBooks.status='loading'
            })
            .addCase(getReadBooks.fulfilled , (state, action)=>{
                state.readBooks.status = 'succeeded'
                state.readBooks.list = action.payload.data.reading
            })
            .addCase(getReadBooks.rejected , (state, action)=>{
                state.readBooks.status='failed'
                state.readBooks.message = action.payload
                state.readBooks.list=[]
            })
           
        }
    }
)


export const selectReadBooks = state => state.user
export default userSlice.reducer