import { Container, Fab, Grid, GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, Paper } from '@material-ui/core'
import React from 'react'
import FlexView from 'react-flexview/lib'
import { DialogPost } from './BackPost/DialogPost'
import './search.css'

export const Search = () => {

    const [openDialog,setOpenDialog] = React.useState(false)

    const openDialogFunction = () => {
        setOpenDialog(true)
    }
    const closeDialog = () =>{
        setOpenDialog(false)
    }
    return(<>
     <div className="root">
     <br/>
        <FlexView >
            <Container>
                <Paper elevation={5}>
                <FlexView onClick={openDialogFunction} className="fruits" hAlignContent="right">
                    <img style={{marginTop:'6em'}} className="photoForCategory" src={`${process.env.PUBLIC_URL}/pablo-867.png`}/>
                </FlexView>
                </Paper>
            </Container>
            <Container>
                <Paper elevation={5}>
                <FlexView className="choco" hAlignContent="left">
                    <img style={{marginTop:'6em'}} className="photoForCategory" src={`${process.env.PUBLIC_URL}/clip-976.png`}/>
                </FlexView>
                </Paper>
            </Container>
            </FlexView>
            <br/>
            <Container maxWidth='xl'>
                <Paper elevation={5}>
                <FlexView className="baby" hAlignContent="right">
                    <img className="photoForCategory" src={`${process.env.PUBLIC_URL}/baby.png`}/>
                </FlexView>
                </Paper>
            </Container>
    <br/>
        <FlexView >
            <Container>
                <Paper elevation={5}>
                <FlexView className="healty" hAlignContent="right">
                    <img className="photoHealty" src={`${process.env.PUBLIC_URL}/pablo-882.png`}/>
                </FlexView>
                </Paper>
            </Container>
            <Container>
                <Paper elevation={5}>
                <FlexView className="cream" hAlignContent="left">
                    <img className="photoCream" src={`${process.env.PUBLIC_URL}/clip-come-back-later.png`}/>
                </FlexView>
                </Paper>
            </Container>
        </FlexView>
        <FlexView hAlignContent="center">
        <Fab >
            <IconButton className="fab">
                <img src={`${process.env.PUBLIC_URL}/icons8-pancake-48.png`}/>
            </IconButton>
        </Fab>
        </FlexView>
        <DialogPost open={openDialog} close={closeDialog}/>
        <br/>
    </div>
     </>)
}