import React, {Component} from 'react';

 class ShowPost extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'info': {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
      fetch(URL)
      .then(results => results.json())
      .then(data => {
        console.log('data is:',data);
        this.setState({
          info:data
        })
      })
  }
  render(){
    let formStyle={
      'height': '200px',
      'padding':' 20px',
      'color': 'blue',
      'margin-top': '300px'
    }
    let {info} = this.state
    return(
      <div className="card" style={formStyle}>
        <h1>Blog Title:{info.title}</h1>
        <h1>Posted by:{info.name}</h1>
          <h1>Blog:{info.blog}</h1>
      </div>
    )
  }
}
export default ShowPost;
