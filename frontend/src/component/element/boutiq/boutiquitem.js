import React, { Component } from 'react'
import defaultImg from '../../images/room-1.jpeg'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {Link} from 'react-router-dom'
import Mainbout from './test'

export default class Boutiquitem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        const {room}=this.props;
        console.log(room)
        return (
                <article className="room">
                    <div className="img-container">
                        <img src={room.photo || defaultImg} alt="single room"/>
                        <div className="price-top">
                            <h6>${room.price}</h6>
                            <p>prix </p>
                        </div>
                        <Link  className="btn-primary room-link">
                            <Mainbout photos={room}/>
                        </Link>
                    </div>
                    <p className="room-info">
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                    />
                    {room.name}
                    </p>
                    
                </article>
        )
    }
}

















