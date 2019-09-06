import React, {Component} from 'react'
import {connect} from 'react-redux'
import Boutiquitem from './boutiquitem'
import ArticleService from '../../../services/articles.service'

class BoutiquList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.articleService = new ArticleService();
    }
    componentDidMount=()=>{
        
        this.articleService.getAll().then(result => {
            debugger;
            var articles = result.data.articles;
            this.setState({articles});
        })
        .catch(error =>
            this.setState({ error }));
            console.log(`bac :${this.state.articles}`)
    }
    render() {
        const {items}=this.props
        console.log(`item ${items}`)
    if (items.length === 0){
        
        return(
            <div className="empty-search">
                <h3>
                    unfortunately no  matched your search parameters
                </h3>
            </div>
        )
    }
    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    items.map((item, index) =><Boutiquitem key={index} room={item}/>)
                }
            </div>
        </section>
    )
}
}

const mapStateToProps = (state) => {
    return { 
        items: state.reduser 
    };
};
const mapDispatchToProps=(dispatch)=>
{
    return {
        refreshReducer:update=>
        {
            dispatch({
                type:'REFRESH',
                update
            })

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BoutiquList);