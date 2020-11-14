import { AppBar, Avatar, Fab, IconButton, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import FlexView from 'react-flexview/lib'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './MunchBottomMenu.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useHistory, useLocation } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { HomeOutlined } from '@material-ui/icons';
import { AddPostPhotoDialog } from '../../components/AddPost/AddPostPhotoDialog';

export const MunchBottonMenu = () => {
    const history = useHistory()
    const location = useLocation()

    const goToSearch = () => {
        history.push('/search')
    }

    const goToAddPost = () => {
        history.push('/add/addPostPhoto')
    }
    
    var isAddPostFlow = location.pathname.startsWith('/add')
  

    return (<> 
  {isAddPostFlow ? <div /> : 
    <AppBar className="appBar" position='fixed'>
        <Toolbar style={{marginTop:'8px'}} >
            <FlexView hAlignContent="center">
            <IconButton className="iconBottom">
                    <HomeOutlinedIcon/>
                </IconButton>
                <IconButton onClick={goToSearch} className="iconBottom">
                    <SearchIcon  />
                </IconButton>
                <IconButton onClick={goToAddPost} className="iconBottom">
                    <AddCircleOutlineIcon/>
                </IconButton>
                <IconButton className="iconBottom" >
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                    <Avatar className="iconBottom">OS</Avatar>
                </IconButton>
                </FlexView>
        </Toolbar>
  </AppBar> }

   

    </>)
}