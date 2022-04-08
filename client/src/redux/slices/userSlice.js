import {createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import * as api from "../../api"

const user = JSON.parse(localStorage.getItem('bibliophile-user'))

// our initial state
const initialState = {
  user:user,
  top3:{
    list: [],
    status: 'idle',
    message:''
  },
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
        return await api.getReadBooks()
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
          markBookAsReadRedux : (state,action) => {
            state.readBooks.list.push(action.payload)
          },
          unreadBookRedux : (state,action) => {
            const filtredBooks =  state.readBooks.list.filter(item => item.id !== action.payload.id) 
            state.readBooks.list = filtredBooks
          }

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
export const {markBookAsReadRedux,unreadBookRedux} =userSlice.actions
export default userSlice.reducer