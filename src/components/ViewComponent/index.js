import MovieCardItem from '../MovieCardItem'
import './index.css'

const ViewComponent = props => {
  const {moviesList, heading} = props
  return (
    <div className="page-container">
      <h1 className="movie-heading">{heading}</h1>
      <ul className="movies-list">
        {moviesList.map(each => (
          <MovieCardItem key={each.id} movie={each} />
        ))}
      </ul>
    </div>
  )
}

export default ViewComponent
