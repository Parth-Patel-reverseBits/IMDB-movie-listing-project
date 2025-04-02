import axios from "axios";


interface MoviesData {
    movieName: string,
    description: string,
    imdbRatings: number,
    imageUrl: string
}

const finalArray: MoviesData[] = [];

const getData = async () => {

    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWY0ZmVlOTJhMjk4ZmIzOTZiYzA4YmRmMDNiNjIxNyIsIm5iZiI6MTc0MzUxMTIyOC42OTI5OTk4LCJzdWIiOiI2N2ViZGViYzM4NWVhMDFiODk3YWIxMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.74LkItcRZleG4aoOsPv5GZj0AWTu5W17u2gwMyh_k5M';

    try {
        const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }});
        response.data.results.map(item => finalArray.push(
            {
                "movieName": item.original_title,
                "description": item.overview,
                "imdbRatings": item.vote_average,
                "imageUrl": `https://image.tmdb.org/t/p/original${item.poster_path}`,
            }
        ))
        console.log(finalArray)
    } catch (error) {
        console.error('Error:', error);
    }
};
  

export {finalArray}
export default getData()