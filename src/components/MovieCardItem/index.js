import {Link} from 'react-router-dom'
import './index.css'

const MovieCardItem = props => {
  const {movie} = props
  const {posterPath, voteAverage, id, title} = movie

  const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`
  const formattedNumber = Math.round(voteAverage * 10) / 10

  return (
    <li className="movie-item-container">
      <img src={posterUrl} alt={title} className="card-poster" />
      <div className="movie-details-container">
        <h1 className="card-title">{title}</h1>
        <div className="rating">
          <span>Rating: {formattedNumber}</span>
        </div>
        <div>
          <Link to={`/movies/${id}`}>
            <button className="view-button" type="button">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default MovieCardItem
