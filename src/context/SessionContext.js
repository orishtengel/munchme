import React from 'react'
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';

const defaultState = {
    email: '',
    username: '',
    picture : '',
    posts : [{}],
    savedPost : [{}],
    followers : [{}],
    following : [{}]
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {...state, email: action.data.email, username: action.data.user}
        case 'SET_PICTURE' :
            return {...state, picture : action.data.picture}
        default:
            return state;
    }
}

export const SessionContextStore = React.createContext(defaultState)

const SessionContext = (props) => {
    const [state, dispatch] = React.useReducer(reducer, defaultState)
    const history = useHistory()
    //const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    React.useEffect(() => {

    }, [])

    const login = async (email, password) => {
        //let resp = await AuthApi.login(username, password)
        // if(resp.ok) {
            // loadAllUsers()
            dispatch({type: 'SET_USER', data: { email: email }})
            // ls.set('token', resp.data.token)
            
            history.push('/')
        // }
     
    }

    // const facebookLogin = async (status) => {
    //     let resp = await AuthApi.facebookLogin(status.email, status.name, `https://graph.facebook.com/${status.userID}/picture?width=200&height=200`)//status.picture.data.url)
    //     if(resp.ok) {
    //         loadAllUsers()
    //         dispatch({type: 'SET_USER', data: { email: status.email, user: resp.data.user }})
    //         ls.set('token', resp.data.token)
    //         history.push('/')
    //     }
    // }

    const logout = () => {
        history.push('/login')
        //ls.remove('token')
        dispatch({type: 'SET_USER', data: { email:'', user: ''}})
    }


    return (
        <SessionContextStore.Provider value={{...state, dispatch, login, logout}}>
            {props.children}
        </SessionContextStore.Provider>
    )
}

export default SessionContext