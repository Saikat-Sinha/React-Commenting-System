import React, { Component } from 'react';
import Post from './Components/Post';
import './App.css';

var api = require('./utils/api');

class App extends Component {
  constructor(props){
    super();

  }

  componentWillMount(){
      api.fetchData()
          .then(function(data){
              console.log(data);
              localStorage.setItem("_commentData_", JSON.stringify(data));
          });
  }

  render() {
    return (
        <div>
            <Post data={JSON.parse(localStorage.getItem("_commentData_"))}/>
        </div>
    );
  }
}

export default App;
