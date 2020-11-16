
import React from 'react'
import { Container,  } from '@material-ui/core';
import { Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import { AddPostPhoto } from './AddPostPhotoDialog';
import { AddPost } from './AddPost';
import { AddPostStages } from './AddPostStages';

export const AddPostsRoutes = () => {
    let { path, url } = useRouteMatch();
    const location = useLocation()

    return <>
        <Switch>
            <Container maxWidth={'xl'}>
                <Route path={`${url}/addPostPhoto`} component={AddPostPhoto} />
                <Route path={`${url}/addPost`} component={AddPost} />
                <Route path={`${url}/addPostStages`} component={AddPostStages} />
                {location.pathname !== '/add/addPostPhoto' ? 
                <img className="svgBoy" src={`${process.env.PUBLIC_URL}/Capture6-removebg-preview.png`} /> : <> </> } 
            </Container>
        </Switch> 
    </>
}