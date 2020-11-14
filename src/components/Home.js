import React from 'react'
import { Post } from './Post/post'
import ReactCardFlip from 'react-card-flip';
import FlexView from 'react-flexview/lib';
import { BackPost } from './BackPost/BackPost';


export const Home = () => {

    const [isflipped,setisfliped] = React.useState(false)

    const flip = () => {
        setisfliped(true)
    }
    const flipback = () => {
        setisfliped(false)
    }


    return(<>

        <br/>
    <ReactCardFlip isFlipped={isflipped}>
        <FlexView onClick={flip} >
            <Post/>
        </FlexView>
        <FlexView onClick={flipback}>
            <BackPost/>
        </FlexView>
    </ReactCardFlip>
   
     </>)
}