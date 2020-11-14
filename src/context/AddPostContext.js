import dayjs from 'dayjs'
import React from 'react'
import uuid from 'react-uuid'

 const defaultstate = {
     id : "" ,
     title : "",
     level: "",
     prepTime : 0,
     firstPicture : "",
     youtubeLink : "",
     ingredients : [{id:uuid()}],
     stages: [{id: uuid()}],
     date : dayjs().format('YYYY-MM-DD')
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
                if(state.id !== "")
                    return {...state , title : action.title , level : action.level, prepTime : action.prepTime}
                else    
                     return {...state, id: uuid() , title : action.title , level : action.level, prepTime : action.prepTime} 
        case('ADD_STAGE'):
                return {...state, stages: [...state.stages, {id: uuid()}]}
        case('EDIT_STAGE'):
                return {...state,
                    stages: [...state.stages.map(s => s.id == action.data.id ? action.data : s)]}
        case 'REMOVE_STAGE':
                return {...state, stages: [...state.stages.filter(s => s.id != action.id)]}
        case('ADD_INGREDIENT'):
                return {...state, ingredients: [...state.ingredients, {id : uuid()}]}    
        case('EDIT_INGREDIENT'):
                return {...state,
                    ingredients: [...state.ingredients.map(s => s.id == action.data.id ? action.data : s)]}
        case ('REMOVE_INGREDIENT'):
                return {...state, ingredients: [...state.ingredients.filter(s => s.id != action.id)]}                      
        default: 
                return state;

    }
}    

export const AddPostContextStore = React.createContext(defaultstate)

const AddPostContext = (props) => {
    const [state, dispatch] = React.useReducer(reducer, defaultstate)

    return (
        <AddPostContextStore.Provider value={{...state, dispatch}}>
            {props.children}
        </AddPostContextStore.Provider>
    )
}

export default AddPostContext


