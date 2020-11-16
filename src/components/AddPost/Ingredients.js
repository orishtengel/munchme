import { Container, IconButton, TextField } from '@material-ui/core'
import { CloseOutlined } from '@material-ui/icons'
import React from 'react'
import FlexView from 'react-flexview/lib'
import { Controller, useForm } from 'react-hook-form'
import CancelIcon from '@material-ui/icons/Cancel';
import { AddPostContextStore } from '../../context/AddPostContext'

export const Ingredients = ({register, data, index, key, name, removeItem}) => {

    const remove = () => {
        removeItem(index)
    }

    return (<> 
    <FlexView style={{justifyContent:"center"}}>
        <TextField label="Amount" variant="outlined" fullWidth type='number'
                    defaultValue={data.amount}
                    inputRef={register({required: true, min: 0})} name={`${name}[${index}].amount`} 
                    placeholder='Amount' style={{marginRight:'8px'}} />
         <TextField label="Name" fullWidth variant="outlined" 
                     name={`${name}[${index}].title`}
                     defaultValue={data.title}
                     inputRef={register()} placeholder='Write name'/>
        <IconButton onClick={remove}>
            <CancelIcon style={{color : "#ffb700"}}/>
        </IconButton>
     </FlexView>    
    </>)
}