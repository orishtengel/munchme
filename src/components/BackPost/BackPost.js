import React from 'react'
import { Card, CardContent, CardHeader, CardMedia, Container, Paper, Typography } from '@material-ui/core'

import FlexView from 'react-flexview/lib'

import './BackPost.css'

export const BackPost = () => {
    return(<> 
        
            <Container maxWidth='xl'>
                <Card className="root" >
                    <Paper elevation={3}>
                        <FlexView hAlignContent="center" vAlignContent="center">
                            <h3>Recpie</h3>
                        </FlexView>
                        <FlexView>
                              <h3>ingredients</h3>
                        </FlexView>
                        <FlexView>
                             <h3>stages</h3>
                        </FlexView>
                        <br/>
                    </Paper>
                </Card>
            </Container>
      
    </>)
}