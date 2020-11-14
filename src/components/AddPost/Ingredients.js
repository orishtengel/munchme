import { Container, IconButton, TextField } from '@material-ui/core'
import { CloseOutlined } from '@material-ui/icons'
import React from 'react'
import FlexView from 'react-flexview/lib'
import { Controller, useForm } from 'react-hook-form'
import CancelIcon from '@material-ui/icons/Cancel';
import { AddPostContextStore } from '../../context/AddPostContext'

export const Ingredients = (props) => {

    const {register, trigger, getValues, errors, setValue, control} = useForm({mode: 'onChange'})
    const addPostContext = React.useContext(AddPostContextStore)

    const remove = () => {
        addPostContext.dispatch({type:'REMOVE_INGREDIENT', id : props.data.id})
    }

    return (<> 
    <FlexView style={{justifyContent:"center"}}>
        <Controller 
        name="amount"
        control={control}
        as={
        <TextField id="outlined-basic" label="Amount" variant="outlined" fullWidth type='number'
                        inputRef={register({required: true, min: 0})} name='Amount' label='Amount' placeholder='Amount' style={{marginRight:'8px'}} />}/>
         <Controller 
        name="name"
        control={control}
        as={
         <TextField  id="outlined-basic" label="Name" fullWidth variant="outlined"  
                                    name='title' label='Name' placeholder='write Name'/>}/>
        <IconButton onClick={remove}>
            <CancelIcon style={{color : "#ffb700"}}/>
        </IconButton>
     </FlexView>

     <br/>

    
    
    </>)
}