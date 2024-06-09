import PropTypes from "prop-types";
import GlobalApi from "../services/GlobalApi";
import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => sliderLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute ${
              index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"
            }`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto scrollbar-hide gap-8 pt-5 px-3 pb-5 transition-all duration-150 ease-in"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard key={index} movie={item} />
            ) : (
              <MovieCard key={index} movie={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => sliderRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 ${index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

MovieList.propTypes = {
  genreId: PropTypes.number.isRequired,
  index_: PropTypes.number.isRequired,
};

export default MovieList;
