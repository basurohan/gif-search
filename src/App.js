import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import keys from '../keys';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    }
  }

  componentDidMount() {
    //   // fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${keys.giphyDEVAPIKey}&limit=25&rating=G`)
    //   //   .then(response => response.json())
    //   //   .then(responseData => {
    //   //     this.setState({ gifs: responseData.data });
    //   //   })
    //   //   .catch(error => {
    //   //     return console.log('Error fetching and parsing data', error);
    //   //   });

    //   axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${keys.giphyDEVAPIKey}&limit=25&rating=G`)
    //     .then(response => {
    //       // check axios documentation on github for more info on the response
    //       this.setState({ gifs: response.data.data });
    //     })
    //     .catch(error => {
    //       console.log('Error fetching and parsing data', error);
    //     });

    this.performSearch();
  }

  performSearch = (query = 'dogs') => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${keys.giphyDEVAPIKey}&q=${query}&limit=25&rating=G&lang=en`)
      .then(response => {
        // check axios documentation on github for more info on the response
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {
            this.state.loading
              ? <p>Loading..</p>
              : <GifList data={this.state.gifs} />
          }
        </div>
      </div>
    );
  }
}
