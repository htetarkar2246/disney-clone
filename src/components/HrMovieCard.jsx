const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import PropTypes from "prop-types";

function HrMovieCard({ movie }) {
  return (
    <section>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2">{movie.title}</h2>
    </section>
  );
}

HrMovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default HrMovieCard;
