import { Container, IconButton, Paper, TextField, Typography } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import React from 'react'
import FlexView from 'react-flexview/lib'
import './Stage.css'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { Controller, useForm } from 'react-hook-form'
import { AddPostContextStore } from '../../context/AddPostContext'
import CancelIcon from '@material-ui/icons/Cancel';


export const Stage = (props) => {
    const {register, trigger, getValues, errors, setValue, control} = useForm({mode: 'onChange'})
    const addPostContext = React.useContext(AddPostContextStore)

    const remove = () => {
         addPostContext.dispatch({type:'REMOVE_STAGE', id : props.data.id})
    }

    

    return (<> 
    <br/>
    <Container maxWidth="xl">
    <Paper elevation={3} className="card" >
        <FlexView>
            <IconButton onClick={remove}>
                <CancelIcon style={{color : "#ffb700"}}/>
            </IconButton>
        </FlexView>
        <FlexView hAlignContent="center" style={{padding:'34px'}}>
            <h3>Add Image</h3>
            <AddPhotoAlternateIcon className="addicon"/>
        </FlexView>
        <FlexView>
        <Controller
                  name="describe"
                  control={control}
                  as={
         <TextField className="describetext" id="outlined-basic" label="Describe Stage" fullWidth variant="outlined"  
                        name='stage' multiline rows={4}/>}/>
        </FlexView>
    </Paper>
    </Container>
    
    
    </>)
}
