import { Button, Container, Dialog, DialogContent, DialogTitle, Divider, IconButton, TextField } from '@material-ui/core'
import React from 'react'
import FlexView from 'react-flexview/lib'
import CloseIcon from '@material-ui/icons/Close';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './AddPostPhotoDialog.css'
import { AddPostDialog } from './AddPost';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';





export const AddPostPhoto = () => {

    
    const history = useHistory()
    const next = () => {
        history.push('/add/addPost')
    }
    const close = () => {
        history.push('/')
    }

return (<> 
   
      
            <FlexView style={{justifyContent:"space-between"}}>
                <FlexView>
                    <IconButton style={{marginLeft:'-23px' }} onClick={close}>
                        <CloseIcon style={{color : "#ffb700"}}/>
                    </IconButton>
                    <h4 style={{marginTop:'20px', marginLeft:'6px'}}>Add New Munch</h4>
                </FlexView>
                <Button onClick={next} className="sharebutton">Next</Button>
            </FlexView>
            <Divider className="divider"/>
     
            <FlexView >
                {/* <FlexView style={{width:'80px',height:'80px'}}>
                    <img style={{width : "-webkit-fill-available",borderRadius: '32px'}} src={`${process.env.PUBLIC_URL}/pancake-1984716_1920.jpg`}/>
                </FlexView> */}
                {/* <TextField className="titleinput" id="outlined-basic" label="Title" fullWidth variant="outlined"  
                        name='title' label='Title' placeholder='write Munch Title'/> */}
            </FlexView>
            <FlexView>
                <h4>Choose photo's from your gallary</h4>
            </FlexView>
           


</>)
}