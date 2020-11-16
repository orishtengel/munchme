import { Card, CardContent, CardHeader, CardMedia, Container, IconButton, Typography } from '@material-ui/core'
import { Flip } from '@material-ui/icons'
import React from 'react'
import FlexView from 'react-flexview/lib'
import { BottomPost } from './BottomPost'
import { HeaderPost } from './HeaderPost'
import ReactCardFlip from 'react-card-flip';
import { BackPost } from '../BackPost/BackPost'


export const Post = ({data}) => {
    const [isflipped,setisfliped] = React.useState(false)
    const flip = () => {
        setisfliped(true)
    }
    const flipback = () => {
        setisfliped(false)
    }

    return(<> 
    <br/>
    <Container maxWidth="xl">
    <ReactCardFlip isFlipped={isflipped}> 
        <FlexView >
            <Container maxWidth='xl'>
                 <Card className="root" >
                    <HeaderPost />
                    <CardMedia >
                        <FlexView onClick={flip} className="media">
                        <img style={{width:"-webkit-fill-available"}} src={`${process.env.PUBLIC_URL}/pancake-1984716_1920.jpg`}/>
                     </FlexView>
                    </CardMedia>
                 <BottomPost title={data.title} time={data.prepTime} level={data.level}/>
                </Card>
            </Container>
        </FlexView>
            <FlexView>
            
                <BackPost data={data} open={isflipped} close={flipback}/>
            </FlexView>
            </ReactCardFlip>
        </Container>
    </>)
    
}