import React, {Component} from "react"
import axios from 'axios';

class SearchBar extends Component {
  state = {
    query: ''
  };

  render () {
    return (
      <>
          <input value={this.state.query} onChange={ this.handleChange }/>
          <h1>I am asad</h1>
      </>
    );
  }

  handleChange = async ({currentTarget: input}) => {
    const {query} = this.state;
    this.setState({query: input.value})
    console.log(input.value)
    let repos = await axios.get('http://localhost:3000/api/v1/repositories?query='+query)
    console.log(repos)
  }
}

export default SearchBar
