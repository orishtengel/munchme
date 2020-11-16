import React from 'react'
import { Container, Dialog, IconButton, Paper, Typography } from '@material-ui/core'
import FlexView from 'react-flexview/lib'
import './BackPost.css'
import CloseIcon from '@material-ui/icons/Close';
import BarChartIcon from '@material-ui/icons/BarChart';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import FullWidthTabs from './TabPanel'

export const BackPost = ({data,open,close}) => {


    return(<> 
        <Dialog className="dialogBackPost" fullScreen open={open}>
            <IconButton style={{position: 'absolute', top: 10, right: 20}} onClick={close}>
                <CloseIcon style={{height:40, width: 40, color:'white'}} />
            </IconButton>
                        <FlexView column hAlignContent="center" vAlignContent="center">
                            <img alt="" className="imageBackPost" src={`${process.env.PUBLIC_URL}/pancake-1984716_1920.jpg`}/>
                            </FlexView>
                            <Paper className="paperTitle">
                                <FlexView vAlignContent="center" hAlignContent="center">
                                    <Typography className="orange" variant="h5">Recepie for {data.title}</Typography>
                                </FlexView>
                            </Paper>
                         <FlexView vAlignContent="center" hAlignContent="left">
                            <TimerOutlinedIcon className="iconBackPost"/>
                            <Typography variant="h6" >
                                 time: {data.prepTime}
                            </Typography>
                        </FlexView>
                        <FlexView hAlignContent="left">
                            <BarChartIcon className="iconBackPost"/>
                            <Typography variant="h6" >
                                level: {data.level}
                            </Typography>
                        </FlexView>
                        <br/>
                        
                        <Paper style={{width:'95%',marginLeft:8}} elevation={4}>
                            <FullWidthTabs data={data}/>
                            </Paper>
                    
                           
                        <br/>
            </Dialog>
      
    </>)
}