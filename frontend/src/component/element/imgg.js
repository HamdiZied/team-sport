import React ,{Component} from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Banner from './banner'

const content = [
    {
      image:"http://www.fiba.basketball/images.fiba.com/Graphic/7/F/F/4/9zIV70JILE-SX3SUKxVBUw.jpg?v=20190416115502872",
      title:"titleeeeeeeeeeeeee",
      description:"discription",
      button:"button"
    },
    {
      image:"http://www.fiba.basketball/images.fiba.com/Graphic/A/6/9/A/isfrFg0gIUmUAvR6atrIMQ.jpg?v=20190414001534354",
      title:"title",
      description:"discription",
      button:"button"
    },
    {
      image:"http://www.fiba.basketball/images.fiba.com/Graphic/3/B/3/E/Q_h-m096l0OaP7MOa9Ss1w.jpg?v=20190331151259992",
      title:"title",
      description:"discription",
      button:"button"
    }
  ]



export default class Slid extends Component {

    render(){
        return (
            <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat center center`}}
                    >
                        </div>
                ))}
            </Slider>
        )}
}