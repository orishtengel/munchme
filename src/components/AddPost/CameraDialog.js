
import { Dialog, IconButton } from '@material-ui/core'
import React from 'react'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import CloseIcon from '@material-ui/icons/Close';

export const CameraDialog = ({open, handleTakePhoto, close}) => {

    return <Dialog fullScreen fullWidth open={open} 
            PaperProps={{style: {overflow: 'hidden'}}}>
            <IconButton style={{position: 'absolute', top: 10, right: 20, zIndex: 9999999999999}} onClick={close}>
                <CloseIcon style={{height:40, width: 40, color:'white'}} />
            </IconButton>
            <Camera isFullscreen={true}
                 onTakePhotoAnimationDone={handleTakePhoto} />
    </Dialog>
}