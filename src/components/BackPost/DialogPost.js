import { Container, Dialog, DialogTitle, IconButton } from '@material-ui/core'
import React from 'react'
import { BackPost } from './BackPost'
import CloseIcon from '@material-ui/icons/Close';
import './DialogPost.css'

export const DialogPost = (props) => {
    return (<> 
        <Dialog className="heightDialog" fullWidth open={props.open} >
        <BackPost/>
        <IconButton style={{position: 'absolute', right: 20, zIndex: 9999999999999}} onClick={props.close}>
                    <CloseIcon style={{height:40, width: 40, color:'#ffb700'}} />
        </IconButton>
        </Dialog>
    </>)
}