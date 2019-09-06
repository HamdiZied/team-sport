import React ,{Component} from 'react'
import jsk from '../images/jsk.jpg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
render(){
    return (
        <nav className="navba">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <div className="positionlogo">
                            <img src={jsk} alt="Beatch Resort" width="300px" height="60px"/>
                        </div>
                    </Link>
                    <button type="button" className="nav-btn" 
                    onClick={this.s=this.handleToggle}>
                    <FaAlignRight className="nav-icon"/>
                    </button>   
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                    <li className="logocenter">
                        <Link to="/admin" >
                        <div className="logoclub">
                            <img src="https://lagrinta.tn/wp-content/uploads/2017/10/Jeunesse_sportive_kairouanaise.png" />
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/boutique">Boutique</Link>
                    </li>
                    <li>
                        <Link to="/calendrier">Calendrier</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )    }
}