import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import BaseLayout from './components/BaseLayout'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import ShowPost from './components/ShowPost'

ReactDOM.render(

          <BrowserRouter>
            <BaseLayout>
              <Switch>
                <Route exact path="/" component={App} />
                <Route path="/create" component={CreatePost} />
                <Route path="/show/:id" component={ShowPost} />
                <Route path="/post" component={PostList} />
              </Switch>
            </BaseLayout>
          </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
