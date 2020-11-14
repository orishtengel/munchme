import { Button, Container, Dialog, DialogContent, DialogTitle, Divider, IconButton, MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'
import FlexView from 'react-flexview/lib'
import './AddPostPhotoDialog.css'
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddPostStages.css'
import { Stage } from './Stage';
import { AddCircleOutline, AddCircleOutlineOutlined, AddCircleOutlineRounded } from '@material-ui/icons';
import { AddPostContextStore } from '../../context/AddPostContext';




export const AddPostStages = () => {

    const addPostContext = React.useContext(AddPostContextStore)
    const {register, trigger, getValues, errors, setValue, control} = useForm({mode: 'onChange'})
    const history = useHistory()
    const back = () => {
        history.push('/add/addPost')
    }
    const AddStage = () => {
        addPostContext.dispatch({type : 'ADD_STAGE'})
    }
    console.log(addPostContext.ingredients)




    return (<> 

     <IconButton style={{marginLeft:'-9px',marginTop:'10px' }} onClick={back}>
                        <KeyboardBackspaceOutlinedIcon style={{color : "#ffb700"}}/>
                    </IconButton>
            <FlexView hAlignContent="center">
                   
                <h3>How to Make?</h3>
            </FlexView>
            <FlexView column hAlignContent="center">
                {addPostContext.stages.map(stage => <Stage data={stage}/>)}
            </FlexView>
            <br/>
            <FlexView hAlignContent="center">
                 <Button onClick={AddStage} className = "addstagebutton"> Add Stage </Button>
            </FlexView>
    
    </>)
}