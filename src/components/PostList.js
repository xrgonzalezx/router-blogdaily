import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class PostList extends Component{
  constructor(props){
    super(props)
    this.state = {
      'blogpost':[]
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
      .then(results => {
          return results.json();
        })
        .then((data) => {
          this.setState({
            blogpost: data
          });
        });
  }
  render(){
    let postStyle={
      'height': '150px',
      'padding':' 20px',
      'color': 'black'
    }

    let blogs = this.state.blogpost
    let lists = blogs.map((post) => {
      return(
        <div className="card" key={post._id} style={postStyle}>
          <h1><Link to={`/show/${post._id}`}>{post.title}</Link></h1>
        </div>
      )
    })
    return(
      <div >
      {lists}
      </div>
    )
  }
}

export default PostList;
