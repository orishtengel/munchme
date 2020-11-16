import { Container, IconButton, Paper, TextField, Typography } from '@material-ui/core'
import { AddCircle, CloseOutlined } from '@material-ui/icons'
import React from 'react'
import FlexView from 'react-flexview/lib'
import './Stage.css'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { Controller, useForm } from 'react-hook-form'
import CancelIcon from '@material-ui/icons/Cancel';
import Camera from 'react-html5-camera-photo';
import { CameraDialog } from './CameraDialog'
import CloseIcon from '@material-ui/icons/Close';

export const Stage = ({register, data, index, key, name, removeItem}) => {

    const [addphoto, setAddphoto] = React.useState(false)
    const [dataUri, setDataUri] = React.useState("")
    const AddPhoto = () =>  setAddphoto(!addphoto)

    const remove = () => {
        removeItem(index)
    }

    const removePhoto = () => {
        setDataUri('')
    }

    const handleTakePhoto = (dataUri) => {
            AddPhoto()
            setDataUri(dataUri)
    }
    return (<> 
   
    <Container maxWidth="xl">
        <Paper elevation={3} className="card" >
            {dataUri ? <>
                    <FlexView style={{height: "30vh", width:'100%'}}>
                     <IconButton style={{position: 'absolute', right: 27}} onClick={removePhoto}>
                          <CloseIcon style={{height:40, width: 40, color:'white'}} />
                     </IconButton>
                     <img style={{height: "30vh", width:'100%', objectFit: 'fill'}} src={dataUri} />
                    </FlexView>
                    </>:
             <>            
                <FlexView>
                    <IconButton onClick={remove}>
                        <CancelIcon className="orange"/>
                    </IconButton>
                </FlexView>
                <FlexView hAlignContent="center" style={{padding:'34px'}}>
                    <h3>Add Image</h3>
                    <IconButton onClick={AddPhoto}>
                        <AddPhotoAlternateIcon className="addicon"/>
                    </IconButton>
                </FlexView>
            </>}
            <TextField label="Stage" fullWidth variant="outlined" 
                        name={`${name}[${index}].stage`}
                        defaultValue={data.stage}
                        multiline rows={4}
                        inputRef={register()} placeholder='Describe Stage...'/>
        </Paper>
    </Container>
    <CameraDialog close={AddPhoto} open={addphoto} handleTakePhoto={handleTakePhoto} />
    
    </>)
}
