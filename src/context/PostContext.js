import dayjs from 'dayjs'
import React from 'react'
import uuid from 'react-uuid'

 const defaultstate = {
    homeposts : []
}

const reducer = (state,action) => {
    console.log("PostContext",state,action)
    switch(action.type) {
        case('ADD_POST') :
            return {...state , homeposts : [...state.homeposts, action.data] }
        default:
            return state
    }
}    

export const PostContextStore = React.createContext(defaultstate)

const PostContext = (props) => {
    const [state, dispatch] = React.useReducer(reducer, defaultstate)

    return (
        <PostContextStore.Provider value={{...state, dispatch}}>
            {props.children}
        </PostContextStore.Provider>
    )
}

export default PostContext