import React, {Component} from 'react';

 class ShowPost extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'details': {}
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
          details:data
        })
      })
  }
  render(){
}

export default ShowPost;
