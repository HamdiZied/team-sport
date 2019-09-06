import React, { Component } from 'react'
import StyledHero from '../component/element/stylehero'
import BoutiqueContainer from '../component/element/boutiq/boutiqucontainer'
import Navbar from '../component/element/Navbar'
import Banner from '../component/element/banner'
import Title from '../component/element/title'
import FooterPage from '../component/element/footer'


export default class Boutique extends Component {
    render() {
        return (
            <div >
                <Navbar/>
                <StyledHero img="http://www.fiba.basketball/api/img/graphic/dcd49fb8-ec63-46d2-959f-5d1afdddeb45/1000/1000?mt=.jpg" >
                    <Banner title="Boutique" subtitle="bla bla bla" />
                </StyledHero>
                <section >
                    <Title title="JOUEURS" />
                    <BoutiqueContainer/>
                </section>
                <FooterPage/>
                
            </div>
        )
    }
}