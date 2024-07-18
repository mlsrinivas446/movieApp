import {Component} from 'react'
import Header from '../Header'
import './index.css'

class MovieItemDetails extends Component {
  state = {
    movieItemDetails: {},
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiKey = '3f06047eaef37387d6cf5279f473bae3'
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

    try {
      const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        const formatMovieDetails = {
          adult: data.adult,
          backdropPath: data.backdrop_path,
          belongsToCollection: data.belongs_to_collection,
          budget: data.budget,
          genres: data.genres,
          homepage: data.homepage,
          id: data.id,
          imdbId: data.imdb_id,
          originCountry: data.origin_country,
          originalLanguage: data.original_language,
          originalTitle: data.original_title,
          overview: data.overview,
          popularity: data.popularity,
          posterPath: data.poster_path,
          productionCompanies: data.production_companies,
          productionCountries: data.production_countries,
          releaseDate: data.release_date,
          revenue: data.revenue,
          runtime: data.runtime,
          spokenLanguages: data.spoken_languages,
          status: data.status,
          tagline: data.tagline,
          title: data.title,
          video: data.video,
          voteAverage: data.vote_average,
          voteCount: data.vote_count,
        }

        this.setState({movieItemDetails: formatMovieDetails})
      } else {
        console.error('Failed to fetch movie details')
      }
    } catch (error) {
      console.error('Error fetching movie details:', error)
    }
  }

  render() {
    const {movieItemDetails} = this.state

    const {
      posterPath,
      title,
      releaseDate,
      genres = [],
      runtime,
      voteAverage,
      tagline,
      overview,
      productionCompanies = [],
    } = movieItemDetails

    const genreList = genres.map(genre => genre.name).join(', ')
    const releaseYear = new Date(releaseDate).getFullYear()
    const formattedRuntime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`

    return (
      <div className="page-view">
        <Header />

        <div className="detail-page-container">
          <div className="poster-section" key={posterPath}>
            <img
              src={`https://image.tmdb.org/t/p/w500${posterPath}`}
              alt={title}
              className="poster"
              key={posterPath}
            />
          </div>
          <div className="info-section">
            <h1 className="title">
              {title} <span className="year">({releaseYear})</span>
            </h1>
            <div className="details">
              <span className="release-date">{releaseDate} (IN)</span>
              <span className="genres">{genreList}</span>
              <span className="duration">• {formattedRuntime}</span>
            </div>
            <div className="user-score">
              <div className="score-circle">
                {Math.round(voteAverage * 10 * 10) / 10}%
              </div>
            </div>
            <div className="actions">
              <button className="play-button" type="button">
                Play Trailer
              </button>
            </div>
            <p className="tagline">{tagline}</p>
            <div className="overview">
              <h2>Overview</h2>
              <p className="overview">{overview}</p>
            </div>
            <div className="credits">
              {productionCompanies.map(company => (
                <p key={company.id}>
                  <span>{company.name}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieItemDetails
