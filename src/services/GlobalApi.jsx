import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "910d7e81992e9672e9772575e0a599e3";

//https://api.themoviedb.org/3/trending/all/day?api_key=910d7e81992e9672e9772575e0a599e3

const movieByGenreBaseURL = movieBaseUrl + "/discover/movie?api_key=" + api_key;

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
