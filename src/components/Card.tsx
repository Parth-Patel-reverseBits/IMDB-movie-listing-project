import React from "react";
import Star from "../../public/star.png";
import InfiniteScroll from "react-infinite-scroll-component";

const Card = ({ data,fetchData,setPage,page } ) => {
  const refresh = () => {
    console.log("Refreshing data...");
  };

  return (
    <InfiniteScroll
      dataLength={data.length} // Use data.length or items.length
      next={() => {
        setPage(page + 1); // Increment the page number
        fetchData(); // Fetch more data for the next page
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      }
    >
      <div>
        {data.map((item, index) => (
          <div key={index} className="flex mt-10 mx-50">
            <img
              className="w-[200px] rounded-2xl"
              src={item.imageUrl}
              alt={item.movieName}
            />
            <div className="w-full bg-[#161F30] p-5 rounded-2xl">
              <h1 className="text-3xl font-bold">
                {index + 1}. {item.movieName}
              </h1>
              <p className="mt-5">{item.description}</p>
              <div className="flex items-center mt-5">
                <img className="w-5" src={Star} alt="star" />
                <div className="ml-3">IMDB Ratings: {item.imdbRatings}</div>
              </div>
              <div className="mt-5">Released Date: {item.releaseDate}</div>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Card;