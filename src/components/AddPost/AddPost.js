import { Button, Container, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'
import FlexView from 'react-flexview/lib'
import CloseIcon from '@material-ui/icons/Close';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './AddPostPhotoDialog.css'
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import { AddPostContextStore } from '../../context/AddPostContext';
import BarChartIcon from '@material-ui/icons/BarChart';
import TitleIcon from '@material-ui/icons/Title';
import { Ingredients } from './Ingredients';
import './AddPost.css'

export const AddPost = () => {
    const history = useHistory()
    const addPostContext = React.useContext(AddPostContextStore)


    const back = () => {
        history.push('/add/addPostPhoto')
        
    }

    const Next = () => {
        history.push('/add/addPostStages')
        addPostContext.dispatch({type : 'ADD_POST_DETAILS' ,  title : getValues().title, level : getValues().level,prepTime: getValues().time})
        
    }

    const Addingredient = () => {
        addPostContext.dispatch({type : 'ADD_INGREDIENT'})
    }

  console.log(addPostContext.ingredients)
    const {register, trigger, getValues, errors, setValue, control} = useForm({mode: 'onChange'})
    

return (<> 
            <FlexView style={{justifyContent:"space-between"}}>
                <FlexView>
                    <IconButton style={{marginLeft:'-23px' }} onClick={back}>
                        <KeyboardBackspaceOutlinedIcon style={{color : "#ffb700"}}/>
                    </IconButton>
                    <h4 style={{marginTop:'20px', marginLeft:'6px'}}>Add New Munch</h4>
                </FlexView>
                <Button onClick={Next} className="sharebutton">Next</Button>
            </FlexView>
            <Divider className="divider"/>
            <br/>
            <Container maxWidth='xl'>
            <FlexView vAlignContent="center" hAlignContent="center"> 
                    <TitleIcon style={{color : "#ffb700", marginRight:'10px'}} />
                    <Controller
                    name="title"
                    control={control}
                    as={
                        <TextField  id="outlined-basic" label="Title" fullWidth variant="outlined"  
                                    name='title' label='Title' placeholder='write Munch Title'/>
                    }/>
                </FlexView>
            </Container>
            <br/>
            <Container maxWidth='xl'>
                <FlexView vAlignContent="center" hAlignContent="center"> 
                    <TimerOutlinedIcon style={{color : "#ffb700", marginRight:'10px'}} />
                    <Controller 
                        name="time"
                        control={control}
                        as={
                <TextField id="outlined-basic" label="Time" variant="outlined" fullWidth type='number'
                        inputRef={register({required: true, min: 0, max: 200})} name='prepTime' label='Time' placeholder='Time' error={!!errors.time}/>}/>
            </FlexView>
            </Container>
                <br/>
        <Container maxWidth='xl'>
            <FlexView vAlignContent="center" hAlignContent="center">
                <BarChartIcon style={{color : "#ffb700", marginRight:'10px'}}/>
                <Controller
                name="level"
                defaultValue="default"
                control={control}
                rules={{required: true, validate: x => x && x != 'default'}}
                as={<Select fullWidth  variant="outlined">
                    <MenuItem value="default" disabled>Choose level</MenuItem>
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Expert">Expert</MenuItem>
                </Select>} />  
                <br/>
                <br/>
            </FlexView>  
        </Container>       
        <Container maxWidth='xl'>
            <FlexView vAlignContent="center" hAlignContent="center">
                <h3>Ingredients</h3>
            </FlexView>
            <br/>
            <FlexView column vAlignContent="center" hAlignContent="center" style={{justifyContent :"center"}}>
            {addPostContext.ingredients.map(ingredient => <Ingredients data = {ingredient} />)}
            </FlexView>
            <FlexView hAlignContent="center">
                 <Button onClick={Addingredient} className = "addingredientsbutton"> Add Ingredient </Button>
            </FlexView>
        </Container> 
        <br/>
                
</>)
}