import React from 'react';
import PropTypes from 'prop-types';

function Movies({ id, year, summary, title, poster }) {
    return <h5 > {title} </h5>;
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};
export default Movies;