import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjFhNjFhMTBiYTQyYjkxYzQ4MjY2MzIyYTQ2ZmMxZSIsInN1YiI6IjY2NWYyY2E0YTgzNWEzYTE3YTUxNzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nDImgqbXfQRqvfFVCvabw0HZdVodPl12YYua0q2gWmU";

const headers = {
    Authorization: "bearer " +
         TMDB_TOKEN,
};

export const fetchDataFromApi =  async (url, params) =>{
 try{
          const {data} = await axios.get(BASE_URL + url, {
             headers,
             params,
          })
          return data;
 } catch (err) {
        console.log(err);
        return err;
 }
}

