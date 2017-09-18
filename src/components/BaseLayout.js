import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class BaseLayout extends Component{
  render(){
    let navStyle={
   fontFamily:"Times",
    fontSize:"1.5em",
    padding:0,
   'padding':' 10px',
   'height': '140px',
   'color': 'white'
 }
 return(

   <div>
     <section style={navStyle}>
     <ul class="nav navbar-nav navbar-right">
       <li>
         <NavLink to='/' activeStyle={{color:"white"}}>Home</NavLink>
       </li>
       <li>
         <NavLink to='/create' activeClassName="selected">Create Post</NavLink>
       </li>
       <li>
         <NavLink to='/post' activeClassName="selected">Show Posts</NavLink>
       </li>
     </ul>
     </section>
     <section>
       {this.props.children}
     </section>
   </div>

 )
}
}

export default BaseLayout;

// import React, {Component} from 'react';
// // IMPORT NavLink <<<<<<<<<<<<<<<
// import { NavLink } from 'react-router-dom';
//
// export default class BaseLayout extends Component {
//   render(){
//     let headerStyle = {
//       "textAlign": "center",
//       "height": "35vw",
//       "color": "#fff",
//       "backgroundImage": "url(./images/space.jpg)",
//       "backgroundPosition": "center",
//       "backgroundSize": "cover",
//       "backgroundRepeat": "none",
//       "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
//     }
//     return (
//       <div className="container-fluid nav">
//         <nav className="row navbar navbar-inverse">
//           <div className="container-fluid">
//             <div className="navbar-header">
//               <ul className="nav navbar-nav">
//                 <li>
//                 <NavLink activeStyle={{color: "yellow"}} to="/">
//                   SWAPI Explorer
//                 </NavLink>
//                 </li>
//                 <li>
//                   <NavLink activeClassName="selected" to="/people">People</NavLink>
//                 </li>
//                 <li>
//                   <NavLink activeClassName="selected" to="/starships">Starships</NavLink>
//                 </li>
//                 <li>
//                   {/* Add a NavLink set to films. Include activeClassName */}
//                   <NavLink activeClassName="selected" to="/films">Films</NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-lg-12 header" style={headerStyle}>
//             <div className="starwars">
//               <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" />
//               <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars"/>
//               <h2 className="byline" id="byline">api explorer</h2>
//             </div>
//           </div>
//         </nav>
//         {/*
//           PASS IN CHILDREN
//           */}
//         {this.props.children}
//         <footer className="col-lg-12">
//           <span>
//             SWAPI EXPLORER
//           </span>
//         </footer>
//       </div>
//     );
//   }
// }
