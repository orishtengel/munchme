import { Container } from '@material-ui/core'
import React from 'react'
import ReactStars from "react-rating-stars-component";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import './BottomPost.css'
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FlexView from 'react-flexview/lib';


export const BottomPost = ({title,time,level}) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (<> 
        <Container maxWidth='xl'>
            <FlexView style={{justifyContent:'space-between'}}>
                 <h3>{title}</h3>
                 <FlexView>
                <TimerOutlinedIcon style={{padding:'4px',height:'50px' }}/>
                 <h5>{time}</h5>
                <KitchenIcon style={{padding:'4px',height:'50px' }}/>
                <h5>{level}</h5>
                </FlexView>
            </FlexView>
            
            <ReactStars classNames="stars"
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<KitchenIcon></KitchenIcon>}
                    halfIcon={<i className="fa-star-half-alt"></i>}
                    fullIcon={<i className="fa-star"></i>}
                    activeColor="#ffd700"
                />

        </Container>

    
    </>)
}