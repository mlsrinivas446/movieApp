import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import MovieItemDetails from './components/MovieItemDetails'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PopularMovies} />
        <Route exact path="/top-rated" component={TopRatedMovies} />
        <Route exact path="/upcoming" component={UpcomingMovies} />
        <Route exact path="/movies/:id" component={MovieItemDetails} />
      </Switch>
    )
  }
}

export default App
