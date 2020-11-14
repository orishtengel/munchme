import logo from './logo.svg';
import './App.css';
import Palette from './pallete/pallete';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FlexView from 'react-flexview/lib';

import { Search } from './components/search';

import { Container } from '@material-ui/core';
import { Home } from './components/Home';
import { MunchMenu } from './Menu/MunchTopMenu/MunchMenu';
import { MunchBottonMenu } from './Menu/MunchBottomMenu/MunchBottomMenu';
import { AddPostPhoto } from './components/AddPost/AddPostPhotoDialog';
import { AddPost } from './components/AddPost/AddPost';
import { AddPostStages } from './components/AddPost/AddPostStages';
import { AddPostsRoutes } from './components/AddPost/AddPostsRoutes';
import AddPostContext from './context/AddPostContext';


const App = () => {
  return (
    <Palette>
      <Router>
        <MunchMenu />
          <Switch>
            <Route exact path="/">
              <Container maxWidth='xl'>
                  <Home />
              </Container>
            </Route>
            <Route path="/search">
              <Container maxWidth="xl">
                  <Search />
              </Container>
            </Route>
            <Route path="/add">
              <AddPostContext>
                <AddPostsRoutes />
              </AddPostContext>
            
            </Route>
          </Switch>
        <MunchBottonMenu/>
      </Router>
      
    </Palette>
  );
}

export default App;
