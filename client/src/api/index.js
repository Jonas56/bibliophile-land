import axios from "axios";

export const  getAllBooks = async () =>  {
    return await axios.get("/v1/api/books/")
}

export const getReadBooks = async () =>  {
    return await axios.get("/v1/api/reading/")
}