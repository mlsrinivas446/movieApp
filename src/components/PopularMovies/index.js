import {Component} from 'react'
import Header from '../Header'
import ReusableComponent from '../ReusableComponent'
import './index.css'

class PopularMovies extends Component {
  state = {
    moviesList: [],
    search: '',
    pageNo: 1,
  }

  componentDidMount() {
    this.getMoviesDetails()
  }

  getMoviesDetails = async () => {
    const {search, pageNo} = this.state
    console.log(pageNo)
    const apiKey = '3f06047eaef37387d6cf5279f473bae3'
    const isEmpty =
      search === ''
        ? `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`
        : `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=${pageNo}`
    const url = isEmpty
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()

      const formatMovieDetails = data.results.map(movie => ({
        adult: movie.adult,
        backdropPath: movie.backdrop_path,
        genreIds: movie.genre_ids,
        id: movie.id,
        originalLanguage: movie.original_language,
        originalTitle: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: movie.poster_path,
        releaseDate: movie.release_date,
        title: movie.title,
        video: movie.video,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
      }))

      this.setState({moviesList: formatMovieDetails})
    } else {
      console.error('Failed to fetch movies')
    }
  }

  onSearch = movie => {
    this.setState({search: movie}, this.getMoviesDetails)
  }

  onNextPageClick = () => {
    this.setState(
      prevState => ({
        pageNo: prevState.pageNo >= 1 ? prevState.pageNo + 1 : 1,
      }),
      this.getMoviesDetails,
    )
  }

  onPrevPageClick = () => {
    this.setState(
      prevState => ({
        pageNo: prevState.pageNo > 1 ? prevState.pageNo - 1 : 1,
      }),
      this.getMoviesDetails,
    )
  }

  render() {
    const {moviesList, pageNo} = this.state

    return (
      <div className="page-view">
        <Header onSearch={this.onSearch} />
        <ReusableComponent
          moviesList={moviesList}
          heading="Popular"
          pageNo={pageNo}
          onNextPageClick={this.onNextPageClick}
          onPrevPageClick={this.onPrevPageClick}
        />
      </div>
    )
  }
}

export default PopularMovies
