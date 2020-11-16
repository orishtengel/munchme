import React from 'react'
import { Post } from './Post/post'
import FlexView from 'react-flexview/lib';
import { SessionContextStore } from '../context/SessionContext';
import { PostContextStore } from '../context/PostContext';


export const Home = () => {
    const sessionContext = React.useContext(SessionContextStore)
    const postContext = React.useContext(PostContextStore)
    const getUser = (id) => {

    }
    return(<>
        <FlexView column>
            {postContext.homeposts.map((item,index) => <>
            <Post key = {index} data = {item}/>
           </>)}
        </FlexView>
        <div style={{height:80}}></div>
     </>)
}