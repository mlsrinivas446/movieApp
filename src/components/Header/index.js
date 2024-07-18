import {Link, withRouter} from 'react-router-dom'
import {useState} from 'react'
import './index.css'

const Header = props => {
  const {location, onSearch} = props
  const [search, setSearch] = useState('')

  const onSearchMovie = event => {
    setSearch(event.target.value)
  }

  const getSearchedMovie = () => {
    onSearch(search)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <h1 className="navbar-title">movieDB</h1>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <h1
              className={`nav-link ${
                location.pathname === '/' ? 'active' : ''
              }`}
            >
              Popular
            </h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/top-rated" className="nav-link">
            <h1
              className={`nav-link ${
                location.pathname === '/top-rated' ? 'active' : ''
              }`}
            >
              Top Rated
            </h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/upcoming" className="nav-link">
            <h1
              className={`nav-link ${
                location.pathname === '/upcoming' ? 'active' : ''
              }`}
            >
              Upcoming
            </h1>
          </Link>
        </li>
      </ul>
      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          onChange={onSearchMovie}
        />
        <button
          className="search-button"
          type="button"
          onClick={getSearchedMovie}
        >
          Search
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
