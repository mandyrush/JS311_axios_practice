// import axios here
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = process.env.MOVIE_DB_API_KEY;

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  return axios(url);
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  let data = axios(url).then(response => {
    return response.data;
  })
  return data;
}

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios(url).then(response => {
    return response.status;
  }).catch(error => {
    return error.response.status;
  })
}

module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}
