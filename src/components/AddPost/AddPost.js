import { Button, Container, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, MenuItem, Paper, Select, TextField } from '@material-ui/core'
import React from 'react'
import FlexView from 'react-flexview/lib'
import CloseIcon from '@material-ui/icons/Close';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './AddPostPhotoDialog.css'
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import { AddPostContextStore } from '../../context/AddPostContext';
import BarChartIcon from '@material-ui/icons/BarChart';
import TitleIcon from '@material-ui/icons/Title';
import { Ingredients } from './Ingredients';
import './AddPost.css'
import { SessionContextStore } from '../../context/SessionContext';
import uuid from 'react-uuid';

export const AddPost = () => {
    const history = useHistory()
    const addPostContext = React.useContext(AddPostContextStore)
    const sessionContext = React.useContext(SessionContextStore)
    const {register, trigger, getValues, errors, control, setError} = useForm({mode: 'onChange',
    defaultValues: {level: "default", ingredients: [{amount: "", title:""}]}})
    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients"
      });

    const back = () => history.push('/add/addPostPhoto')

    const Next = () => {
        history.push('/add/addPostStages')
        addPostContext.dispatch({type : 'ADD_POST_DETAILS' , data : { data : getValues(), makerId : sessionContext.id  }})
    }

    const Addingredient = () => append({amount: "", title:""})

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
                <Paper className="textfiledpost">
                    <TextField color="white" inputRef={register} id="outlined-basic" label="Title" fullWidth variant="outlined"  
                            name='title' label='Title' placeholder='write Munch Title'/>
                </Paper>
                </FlexView>
            </Container>
            <br/>
            <Container maxWidth='xl'>
                <FlexView vAlignContent="center" hAlignContent="center"> 
                    <TimerOutlinedIcon style={{color : "#ffb700", marginRight:'10px'}} />
                    <Paper className="textfiledpost">
                        <TextField label="Time" variant="outlined" fullWidth type='number'
                            inputRef={register({required: true, min: 0, max: 200})} 
                            name='prepTime' label='Time' placeholder='Write Prepartion time' error={!!errors.prepTime}/>
                    </Paper>
                </FlexView>
            </Container>
            <br/>
        <Container maxWidth='xl'>
            <FlexView vAlignContent="center" hAlignContent="center">
                <BarChartIcon style={{color : "#ffb700", marginRight:'10px'}}/>
                <Paper className="textfiledpost">
                <Controller
                    name="level"
                    defaultValue="default"
                    control={control}
                    rules={{required: true, validate: x => x && x != 'default'}}
                as={
                        <Select fullWidth variant="outlined">
                            <MenuItem value="default" disabled>Choose level</MenuItem>
                            <MenuItem value="Beginner">Beginner</MenuItem>
                            <MenuItem value="Intermediate">Intermediate</MenuItem>
                            <MenuItem value="Expert">Expert</MenuItem>
                        </Select>
                    } />
                    </Paper>  
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
                {fields.map((item, index) => <>
                    <Ingredients
                        register={register}
                        data={item}
                        key={index} 
                        name="ingredients" 
                        removeItem={remove}
                        index={index}/>
                     <br />
                     </>)}
            </FlexView>
            <FlexView hAlignContent="center">
                 <Button onClick={Addingredient} className = "addingredientsbutton"> Add Ingredient </Button>
            </FlexView>
        </Container> 
        <br/>
                
</>)
}