import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, year, title, poster, summary }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          poster,
          summary
        }
      }}
    >
      <div className="movie">
        <div className="movie__data">
          <img src={poster} alt={title} title={title} />

          <div className="content">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            {/* <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul> */}
            {/* { <p className="movie__summary">{summary}</p> } */}
          </div>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
