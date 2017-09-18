import React, {Component} from 'react';
import {Link} from 'react-router-dom'

 class CreatePost extends Component{
  constructor(props){
    super(props)
    this.state = {
      'name':'',
      'title':'',
      'blog':''
    }
    this.addToList = this.addToList.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBlogChange = this.handleBlogChange.bind(this)
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({
        'name': e.target.value,
        'title': e.target.value,
        'blog': e.target.value
      });
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response, "yesss");
      })
      .catch(err => {
        console.log(err, "noooot");
      });
      this.setState({
        name: '',
        title: '',
        blog: ''
      });
  }

  handleNameChange(e){
    this.setState({
      name:e.target.value
    })
  }
  handleTitleChange(e){
    this.setState({
      title:e.target.value
    })
  }
  handleBlogChange(e){
    this.setState({
      blog:e.target.value
    })
  }


  render(){
    let blogFormStyle={
      'padding':' 20px',
      'height': '150px',
      'margin-top': '70px',
      'width':'350px',
      'margin-left': '5px',
      'color': 'black'
    }
    return(
    <div style={blogFormStyle} >
      <form >
    <div className="form-group">
      <label>Name:</label>
      <input className="form-input"  onChange={this.handleNameChange} value={this.state.name} type="text" ></input>
    </div>
    <div className="form-group">
      <label>Title:</label>
      <input className="form-input"  onChange={this.handleTitleChange} value={this.state.title} type="text"></input>
    </div>
    <div className="form-group">
      <label>BLOG:</label>
      <input className="form-input"  rows="3" onChange={this.handleBlogChange} value={this.state.blog}></input>
    </div>
    <button className="btn btn-primary" type="submit"  onClick={this.addToList}>Submit</button>
  </form>

      </div>
    )
  }
}

export default CreatePost;

// class PlayListForm extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      userName: "",
//      songArtist: "",
//      songTitle: "",
//      songNotes: ""
//    }
//  }
//
//  handleUserName = (e) => {
//    this.setState({userName: e.target.value});
//  }
//
//  handleSongArtist = (e) => {
//    this.setState({songArtist: e.target.value});
//  }
//
//  handleSongTitle = (e) => {
//    this.setState({songTitle: e.target.value});
//  }
//
//  handleSongNotes =(e) => {
//    this.setState({songNotes: e.target.value});
//  }
//
//    addToList = (e) => {
//        e.preventDefault();
//        this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
// //stringify method converts a js value to a json string
//        let listItem = JSON.stringify(this.state);
//
//        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
//          method: "POST",
//          body: listItem,
//          headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//        }
//      })
//
//    .then(response => {
//      console.log(response, "yesss");
//    })
//
//    .catch(err => {
//      console.log(err, "noooot");
//    });
//
//
//    // line below //>>>>>We also update the value of state.name back to an empty string. This clears our input box since its value is the value of this.state.name.
//    //     this.setState({students: this.state.students, name: ""});
//    this.setState({
//       userName: '',
//       songNotes: '',
//       songArtist: '',
//       songTitle: ''
//     });
// }
//
// render() {
//  return (
//    <form className="formData width" onSubmit={this.addToList}>
//      <div className="formDiv">
//
//        <label className="formLabel">User Name:</label>
//        <input className="formInput" type="text" placeholder="Enter UserName" onChange={this.handleUserName} value={this.state.userName}/>
//
//      </div>
//      <div className="formDiv">
//
//        <label className="formLabel">Artist/Band:</label>
//        <input className="formInput" type="text" placeholder="Enter Artist/Band" onChange={this.handleSongArtist} value={this.state.songArtist}/>
//
//      </div>
//      <div className="formDiv">
//        <label className="formLabel">Song Title:</label>
//
//        <input className="formInput" type="text" placeholder="Enter Song Title" onChange={this.handleSongTitle} value={this.state.songTitle}/>
//      </div>
//      <div className="formDiv">
//        <label className="formLabel">Notes About Song:</label>
//
//        <input className="formNotes" type="text" onChange={this.handleSongNotes} value={this.state.songNotes}/>
//      </div>
//      <input className="submitForm" type="submit" onClick={this.addToList}/>
//    </form>
//   );
//  }
// }
