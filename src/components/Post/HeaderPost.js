import { Avatar, Container, Divider, IconButton, Paper, Typography } from '@material-ui/core'
import React from 'react'
import FlexView from 'react-flexview/lib'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import './HeaderPost.css'

export const HeaderPost = () => {

    return(<> 
      <Container maxWidth='xl'>
            <FlexView style={{justifyContent: 'space-between',paddingTop:'7px'}}> 
                <Avatar>OS</Avatar>
                <Typography >Ori shtengel</Typography>
                <IconButton>
                <BookmarkBorderIcon/>
                </IconButton>
            </FlexView>
        </Container>
   </>)
}