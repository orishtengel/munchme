import { AppBar } from '@material-ui/core'
import react from 'react'
import FlexView from 'react-flexview/lib'
import { useHistory, useLocation } from 'react-router-dom'
import './MunchMenu.css'

export const MunchMenu = () => {
const history = useHistory()
const location = useLocation()
    const goToHome = () =>{
        history.push ('/')
    }

    var isAddPostFlow = location.pathname.startsWith('/add')
  

    return (<> 
     {isAddPostFlow ? <div /> : 
    <AppBar position='static'>
        <FlexView onClick={goToHome} className="menu" hAlignContent = "center">
             <img className="icon" src={`${process.env.PUBLIC_URL}/logo.png`}/>
             <img className="logo" src={`${process.env.PUBLIC_URL}/munch_logo.png`}/>
        </FlexView>
    </AppBar>}
    
    
    
    
    </>)
}