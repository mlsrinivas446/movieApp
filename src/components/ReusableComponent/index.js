import MovieCardItem from '../MovieCardItem'
import './index.css'

const ResuableComponent = props => {
  const {moviesList, heading, onNextPageClick, onPrevPageClick, pageNo} = props

  const navToPrevPage = () => {
    onPrevPageClick()
  }

  const navToNextPage = () => {
    onNextPageClick()
  }

  return (
    <div className="page-container">
      <h1 className="movie-heading">{heading}</h1>
      <ul className="movies-list">
        {moviesList.map(each => (
          <MovieCardItem key={each.id} movie={each} />
        ))}
      </ul>
      <div className="page-nav-button-container">
        <button className="button" type="button" onClick={navToPrevPage}>
          Prev
        </button>
        <p className="page-no">{pageNo}</p>
        <button className="button" type="button" onClick={navToNextPage}>
          Next
        </button>
      </div>
    </div>
  )
}

export default ResuableComponent
