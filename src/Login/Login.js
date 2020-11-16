import { Button, Container, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import FlexView from 'react-flexview/lib'
import { useForm } from 'react-hook-form'
import FacebookLogin from 'react-facebook-login';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom'
import {ReactComponent as EatingSvg} from '../assets/undraw_tasting_de22.svg'
import { SessionContextStore } from '../context/SessionContext';
export const Login = () => {
    const sessionContext = React.useContext(SessionContextStore)
    const {register, trigger, getValues, errors} = useForm({mode: 'onChange'})
    const login = async () => {
            let valid = await trigger()
            if(!valid)
                return
            else 
            sessionContext.login(getValues().email,getValues().password)
    }

    const responseFacebook = (response) => {
        console.log(response);
        if(response.accessToken) {
            sessionContext.facebookLogin(response)
            if(window.FB) {
                window.FB.logout()
            }
        }
    
}
    return (<>
        <Container maxWidth='xl'>
            <FlexView column hAlignContent="center">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} /> 
            <div className="logoLogin">
                <img src={`${process.env.PUBLIC_URL}/logo_new.png`} /> 
            </div>
            </FlexView>
         <br/>
         <Container maxWidth = "xl">
            <FlexView column vAlignContent="center" hAlignContent="center" className="justify">
                <Paper className="textfieldlogin">
                    <TextField color="white" inputRef={register} name="email" label="email" placeholder="Insert email" fullWidth variant="outlined"/>
                </Paper>
                <br/>
                <Paper className="textfieldlogin">
                    <TextField inputRef={register} name="password" label="password" placeholder="Insert password" fullWidth variant="outlined"/>
                </Paper>
                <br/>
                <button className="sharefinalbutton" onClick={login}>Login</button>
                <br/>
            </FlexView>
        </Container>
            <FlexView hAlignContent={'center'}>
            <FacebookLogin
                appId="758350508090095"
                // redirectUri={`${window.location.host}/login`}
                autoLoad={false}
                isMobile={false}
                fields="name, email, picture"
                callback={responseFacebook} 
                 icon="fa-facebook"
                 textButton="connect with facebook"
                />
            </FlexView>
            <div className="terms">By clicking connect with facebook you're agreeing to our <a target="_blank" className="link" href="http://beach9-server.herokuapp.com/privacy-policy.html">Privacy Policy</a> and <a target="_blank" className="link" href="http://beach9-server.herokuapp.com/terms-and-conditions.html">Terms and Conditions.</a></div>            
            <EatingSvg className="eating"/>
        </Container>
</>)}