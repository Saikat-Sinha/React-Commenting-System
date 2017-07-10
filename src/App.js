import React, { Component } from 'react';
import Post from './Components/Post';
import './App.css';

var api = require('./utils/api');

class App extends Component {
  constructor(props){
    super();
    this.state={
        PostCommentData: null
    };
    this.setDataItem = this.setDataItem.bind(this);
  }

  componentWillMount(){
      api.fetchData()
          .then(function(data){
              console.log(data[0]);
              localStorage.setItem("_commentData_", JSON.stringify(data));
          });

      this.setDataItem()
  }
  setDataItem(){
      var file = JSON.parse(localStorage.getItem("_commentData_"));
      this.setState({
          PostCommentData: file
      })
  }

  render() {
    return (
        <div>
            <Post data={this.state.PostCommentData}/>
        </div>
    );
  }
}

export default App;
