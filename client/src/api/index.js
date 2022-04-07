import axios from "axios";


/* books*/
// get all books
export const  getAllBooks = async () =>  {
    return await axios.get("/v1/api/books/")
}

// get read books
export const  getReadBooks = async () =>  {
    return await axios.get("/v1/api/reading/")
}


/* auth */


// Register user
export const register = async (userData) => {
    const response = await axios.post('/v1/api/register/' , userData)

    if(response.data){
        localStorage.setItem('bibliophile-user' , JSON.stringify(response.data) )
    }

    return response.data
}

// login 
export const login = async (userData) => {
    const response = await axios.post('/v1/api/login/', userData)

    if(response.data){
        localStorage.setItem('bibliophile-user' , JSON.stringify(response.data) )
    }

    return response.data
}

// logout
export const logout =  () => {
    localStorage.removeItem('bibliophile-user')
}
