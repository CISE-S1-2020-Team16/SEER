import React, { Component } from 'react'
import api from '../api'
import axios from 'axios'
import Suggestions from './Suggestions'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
      axios.get(api.getAllArticles)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={input => this.search = input}
          onChange={this.handleInputChange}/>
          <Suggestions results={this.state.results} />
    </form>
    )
  }
}

export default Search

