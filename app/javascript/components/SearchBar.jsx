import React, { Component } from "react"
import axios from 'axios'
import { RepositoryInfo } from "./RepositoryInfo"

class SearchBar extends Component {
  state = {
    repos: []
  };

  queryGithub = async ({currentTarget: input}) => {
    const query = input.value;

    if(query.length > 3){
      try {
        let repos = await axios.get('http://localhost:3000/api/v1/repositories?query='+query);
        this.setState({repos: repos.data})
      } catch (e) {
        alert('something went wrong')
      }

    }
  };

  render () {
    return (
      <>
        <input onChange={ this.queryGithub }/>
        <h3>Respositories:</h3>
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Title</th>
              <th>Description</th>
              <th>Forks</th>
              <th>Stars</th>
            </tr>
          </thead>
          <tbody>
            {this.state.repos.map(repo => {
              const { id, full_name, description, forks, stargazers_count, owner, html_url } = repo;
              return <RepositoryInfo
                  key={id}
                  name={full_name}
                  description={description}
                  forks={forks}
                  starsCount={stargazers_count}
                  avatarUrl={owner.avatar_url}
                  url={html_url}
              />
            })}
          </tbody>
        </table>
      </>
    )
  }

}

export default SearchBar
