import logo from './logo.svg';
import './App.css';
import Palette from './pallete/pallete';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
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
import SessionContext from './context/SessionContext';
import { Login } from './Login/Login';
import { LoadingScreen } from './components/loadingPage/LoadingPage';
import PostContext from './context/PostContext';





const App = () => {
  //const location = useLocation()

  return (
    <Palette>
      <Router>
        <LoadingScreen/>
        <SessionContext>
          <Route path='/login'>
          <Container maxWidth='xl' className="bodyPost">
            <Login />
          </Container>
          </Route>
        <MunchMenu />
          <Switch>
            <PostContext>
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
                <Container  maxWidth="xl" className="bodyPost">
                  <AddPostsRoutes /> 
                </Container>
              </AddPostContext>            
            </Route>
            </PostContext>
          </Switch>
        <MunchBottonMenu/>
        </SessionContext>
      </Router>
      
    </Palette>
  );
}

export default App;
