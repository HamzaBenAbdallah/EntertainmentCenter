"use strict";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const { API_KEY } = process.env;

export const getCurrentlyPlayingMovies = async (req, res) => {
  const { page, region } = req.query;
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${
    page || 1
  }&region=${region || "US"}`;

  try {
    const response = await axios(url);
    const data = response.data.results;
    const relevantData = data.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      genre_id: movie.genre_ids,
    }));
    res.status(200).json(relevantData);
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "Please enter a valid page number",
    });
  }
};

export const getTopRatedMovies = async (req, res) => {
  const { page, region } = req.query;
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${
    page || 1
  }&region=${region || "US"}`;
  try {
    const response = await axios(url);
    const data = response.data.results;
    const relevantData = data.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      genre_id: movie.genre_ids,
    }));
    res.status(200).json(relevantData);
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "Please enter a valid page number",
    });
  }
};

export const getTrendingMovies = async (req, res) => {
  const { page, region } = req.query;
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${
    page || 1
  }&region=${region || "US"}`;

  try {
    const response = await axios(url);
    const data = response.data.results;
    const relevantData = data.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      genre_id: movie.genre_ids,
    }));
    res.status(200).json(relevantData);
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "Please enter a valid page number",
    });
  }
};
