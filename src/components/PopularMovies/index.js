import {Component} from 'react'
import Header from '../Header'
import ViewComponent from '../ViewComponent'
import './index.css'

class PopularMovies extends Component {
  state = {
    moviesList: [],
    search: '',
  }

  componentDidMount() {
    this.getMoviesDetails()
  }

  getMoviesDetails = async () => {
    const {search} = this.state
    const apiKey = '3f06047eaef37387d6cf5279f473bae3'
    const isEmpty =
      search === ''
        ? `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        : `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1`
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

  render() {
    const {moviesList} = this.state

    return (
      <div className="page-view">
        <Header onSearch={this.onSearch} />
        <ViewComponent moviesList={moviesList} heading="Upcoming" />
      </div>
    )
  }
}

export default PopularMovies
