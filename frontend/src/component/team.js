import React, { Component } from 'react'
import Hero from '../component/element/hero'
import Navbar from '../component/element/Navbar'
import Banner from '../component/element/banner'
import Slid from '../component/element/imgg'
import Title from '../component/element/title'
import FooterPage from '../component/element/footer'
import DenseTable from '../component/element/tablejou'
import StyledHero from '../component/element/stylehero'

export default class Team extends Component {
    render() {
        return (
            <div >
                <Navbar/>
                <StyledHero img="http://www.fiba.basketball/api/img/graphic/17a5998b-4b5f-4685-bacf-0cbca3f71d27/1000/1000?mt=.jpg" >
                    <Banner title="team" subtitle="bla bla bla bla bla " />
                </StyledHero>
                <section className="blac">
                    <Title title="JOUEURS" />
                    <DenseTable/>
                </section>
                <FooterPage/>
                
            </div>
        )
    }
}
