import { Button, Container, Dialog, DialogContent, DialogTitle, Divider, Fab, IconButton, MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'
import FlexView from 'react-flexview/lib'
import './AddPostPhotoDialog.css'
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddPostStages.css'
import { Stage } from './Stage';
import { AddCircleOutline, AddCircleOutlineOutlined, AddCircleOutlineRounded } from '@material-ui/icons';
import { AddPostContextStore } from '../../context/AddPostContext';
import ShareIcon from '@material-ui/icons/Share';
import { PostContextStore } from '../../context/PostContext';





export const AddPostStages = () => {

    const addPostContext = React.useContext(AddPostContextStore)
    const postContext = React.useContext(PostContextStore)
    const {register, trigger, getValues, errors, control, setError} = useForm({mode: 'onChange',
    defaultValues: {stages: [{picture: "", stage:""}]}})
    const { fields, append, remove } = useFieldArray({
       control,
       name: "stages"
     });
    const history = useHistory()
    const back = () => {
        history.push('/add/addPost')
    }
    const AddStage = () => {
        append({picture: "" , stage: ""})
    }
    const Share = () => {
        addPostContext.share(getValues())
        history.push('/')
    }

    return (<> 

        <Container maxWidth="xl">
        <FlexView className="justify">
             <IconButton style={{marginLeft:'-9px',marginTop:'10px' }} onClick={back}>
                        <KeyboardBackspaceOutlinedIcon className="orange"/>
            </IconButton>
           <button onClick={Share} style={{position: 'absolute', top: 10, right: 20}} className="sharefinalbutton">Share</button>
         </FlexView>
         </Container>
            <FlexView hAlignContent="center">
                <h3>How to Make?</h3>
            </FlexView>
            <FlexView column hAlignContent="center">
            {fields.map((item, index) => <>
                    <Stage
                        register={register}
                        data={item}
                        key={index} 
                        name="stages" 
                        removeItem={remove}
                        index={index}  />
                     <br />
                     </>)}
            </FlexView>
            <br/>
            <FlexView hAlignContent="center">
                 <Button onClick={AddStage} className = "addstagebutton"> Add Stage </Button>
            </FlexView>
           
    
    </>)
}