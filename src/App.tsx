import Card from "./components/card"
import { useEffect, useState } from "react"
import axios from "axios"
const App = () => {

  const [ data, setData ]  = useState([]);
  const [page,setPage]=useState(1);

  useEffect(()=>{
    fetchData()
  },[page])

    const fetchData =async()=>{
      const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
      const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWY0ZmVlOTJhMjk4ZmIzOTZiYzA4YmRmMDNiNjIxNyIsIm5iZiI6MTc0MzUxMTIyOC42OTI5OTk4LCJzdWIiOiI2N2ViZGViYzM4NWVhMDFiODk3YWIxMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.74LkItcRZleG4aoOsPv5GZj0AWTu5W17u2gwMyh_k5M';
  
      try {
          const response = await axios.get(url, {
          headers: {
              Authorization: `Bearer ${token}`
          }});
          const apiData=response.data.results.map((item)=>{
            // console.log(item.release_date)
            return  {
                "movieName": item.original_title,
                "description": item.overview,
                "imdbRatings": item.vote_average,
                "imageUrl": `https://image.tmdb.org/t/p/original${item.poster_path}`,
                "releaseDate": item.release_date,
              }
              
        })
        setData((prevData) => [...prevData, ...apiData]);
      } catch (error) {
          console.error('Error:', error);
      }
    }

  return(
    <>
      <div className="w-full  dark:bg-black dark:text-white">
        <h1 className="text-center text-4xl pt-5 font-extrabold text-[#E2B616]">IMDB Infinite Movies Scrolling</h1>
        <Card data={data} fetchData={fetchData} setPage={setPage} page={page}/>
      </div>
    </>
  )
}

export default App

