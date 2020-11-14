
import React from 'react'
import { Container,  } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AddPostPhoto } from './AddPostPhotoDialog';
import { AddPost } from './AddPost';
import { AddPostStages } from './AddPostStages';

export const AddPostsRoutes = () => {
    let { path, url } = useRouteMatch();

    return <>
        <Switch>
            <Container maxWidth={'xl'}>
                <Route path={`${url}/addPostPhoto`} component={AddPostPhoto} />
                <Route path={`${url}/addPost`} component={AddPost} />
                <Route path={`${url}/addPostStages`} component={AddPostStages} />
            </Container>
        </Switch> 
    </>
}