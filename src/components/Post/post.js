import { Card, CardContent, CardHeader, CardMedia, Container, Typography } from '@material-ui/core'
import React from 'react'
import FlexView from 'react-flexview/lib'
import { BottomPost } from './BottomPost'
import { HeaderPost } from './HeaderPost'

export const Post = () => {

    return(<> 
    <br/>
        <FlexView >
            <Container maxWidth='xl'>
                 <Card className="root" >
                    <HeaderPost/>
                    <CardMedia>
                        <FlexView className="media">
                     <img style={{width:"-webkit-fill-available"}} src={`${process.env.PUBLIC_URL}/pancake-1984716_1920.jpg`}/>
                     </FlexView>
                    </CardMedia>
                 <BottomPost/>
                </Card>
            </Container>
        </FlexView>
    
    </>)
}