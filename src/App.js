import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Data/data'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  incrementIndex() {
    if(this.state.currentIndex < 24){
      this.setState({currentIndex: this.state.currentIndex + 1})
    } else if(this.state.currentIndex === 24) {
      this.setState({currentIndex: 0})
    }
  }

  decrementIndex() {
    if(this.state.currentIndex > 0){
      this.setState({currentIndex: this.state.currentIndex - 1})
    } else if(this.state.currentIndex === 0) {
      this.setState({currentIndex: 24})
    }
  }

  render() {
    return (
      <div className='slides-app'>
        <header className='home-bar'>
          <div className='home-button'>Home</div>
        </header>
        <body className='main-body'>
          <section className='slides-box'>
            <div className='slide-counter'>{this.state.currentIndex + 1}/25</div>
            <div className='person-name'>{data[this.state.currentIndex].name.first}&nbsp;{data[this.state.currentIndex].name.last}</div>
            <div className='person-from'>From:&nbsp;<div className='person-location'>{data[this.state.currentIndex].city},&nbsp;{data[this.state.currentIndex].country}</div></div>
            <div className='person-title'>Job Title:&nbsp;<div className='person-job'>{data[this.state.currentIndex].title}</div></div>
            <div className='person-employer'>Employer:&nbsp;<div className='person-employer-name'>{data[this.state.currentIndex].employer}</div></div>
            <div className='favourite-movies'>
              Favourite Movies:&nbsp;
              <ol className='movie-list'>
                <li>{data[this.state.currentIndex].favoriteMovies[0]}</li>
                <li>{data[this.state.currentIndex].favoriteMovies[1]}</li>
                <li>{data[this.state.currentIndex].favoriteMovies[2]}</li>
              </ol>
            </div>
          </section>
          <section className='slide-nav'>
            <div className='previous' onClick={() => this.decrementIndex()}>&lt; Previous</div>
            <div className='next' onClick={() => this.incrementIndex()}>Next &gt;</div>
          </section>
        </body>
      </div>
    )
  }
}

export default App;