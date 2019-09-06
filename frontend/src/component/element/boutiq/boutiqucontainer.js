import React, {Component} from 'react'
import BoutiquList from './boutiqulist'

import Loading from '../loading'
import ArticleService from '../../../services/articles.service'

class BoutiqueContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        this.articleService = new ArticleService();
    }
    // componentDidMount = () => {
    //     this.setState({
    //         loading: false
    //     })
    //     this.articleService.get()
    //         .then((response) => {
    //             var articles = response.data.data;
    //             console.log(articles)
    //             this.setState({
    //                 articles,
    //                 loading: false
    //             },
    //             console.log(articles)
    //             );
    //         })
    //         .catch(error => {
    //             this.setState({
    //                 error: true
    //             });
    //         });
    // }
    render() {
        // console.log(this.state.loading)
        if (!this.state.loading) {
            return <Loading /> ;
        }
        // console.log(this.state.articles)
        return ( 
            <BoutiquList />
        )
    }
}

export default BoutiqueContainer;