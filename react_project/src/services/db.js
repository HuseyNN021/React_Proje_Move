import axios from 'axios'

export const getMovieData=async (name)=>{
    const response=await axios.get(`http://www.omdbapi.com/?apikey=99d929d9&s=${name}`)
    return response.data.Search
}

