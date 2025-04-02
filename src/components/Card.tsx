import getData, { finalArray }  from "../API-Services/FetchMovieData"

const card = () => {
    return(
        <>
        {finalArray.map((item) => <h1>{item.movieName}</h1>)}
        <h1>Hello I am card</h1>
        </>
    )
}

export default card