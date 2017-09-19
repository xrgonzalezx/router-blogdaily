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
      'height': '120px',
      'padding':' 10px',
      'color': 'black',
      'margin-bottom': '30px',
      'box-shadow': '5px 5px 20px black',
      'margin-bottom': '55px',
      'margin-top': '300px'
    }

    let blogs = this.state.blogpost
    let lists = blogs.map((post) => {
      return(
        <div className="card" key={post._id} style={postStyle}>
          <p>Blog Card</p>
          <h3><Link to={`/show/${post._id}`}>{post.title}</Link></h3>
          <h5><Link to={`/show/${post._id}`}>{post.name}</Link></h5>
        </div>
      )
    })
    return(
      <div className="listWrapper" >
      {lists}
      </div>
    )
  }
}

export default PostList;
