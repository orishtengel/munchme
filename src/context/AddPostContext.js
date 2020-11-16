import dayjs from 'dayjs'
import React from 'react'
import uuid from 'react-uuid'
import { PostContextStore } from './PostContext'

 const defaultstate = {
     id : "" ,
     title : "",
     level: "",
     prepTime : 0,
     firstPicture : "",
     youtubeLink : "",
     ingredients : [{id:uuid()}],
     stages: [{id: uuid()}],
     date : dayjs().format('YYYY-MM-DD'),
     makerid: ""
}

const reducer = (state,action) => {
    console.log("AddPostContext",state,action)
    switch(action.type) {
        case('ADD_POST') :
            return {...state,id : uuid(), title : action.title , level : action.level,prepTime : action.prepTime,
                            firstPicture: action.firstPicture ,pictures : action.pictures,youtubeLink : action.youtubeLink,
                            ingredients: action.ingredients,stages : action.stages};
        case('ADD_POST_PHOTO'):
                return {...state, firstPicture : action.firstPicture,youtubeLink : action.youtubeLink}      
        case('ADD_POST_DETAILS'):
                    return {...state, title: action.data.data.title, level: action.data.data.level,
                         prepTime: action.data.data.prepTime, ingredients: action.data.data.ingredients, makerid: action.data.makerid}
        case('ADD_POST_STAGES'):
                return {...state, stages: action.data.stages}
        default:
                return state
    }
}    

export const AddPostContextStore = React.createContext(defaultstate)

const AddPostContext = (props) => {
    const [state, dispatch] = React.useReducer(reducer, defaultstate)
    const postContext = React.useContext(PostContextStore)

    const share = (data) => {
        dispatch({type : 'ADD_POST_STAGES' , data : data})
        postContext.dispatch({type : 'ADD_POST', data : {...state , ...data} })

    }

    return (
        <AddPostContextStore.Provider value={{...state, dispatch,share}}>
            {props.children}
        </AddPostContextStore.Provider>
    )
}

export default AddPostContext


