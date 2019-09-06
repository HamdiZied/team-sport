import React, { Component } from 'react'
import StyledHero from '../component/element/stylehero'
import MaterialTableDemo from '../component/element/listparti'
import Navbar from '../component/element/Navbar'
import Banner from '../component/element/banner'
import Title from '../component/element/title'
import FooterPage from '../component/element/footer'

export default class Calendrier extends Component {
    render() {
        return (
            <div >
                <Navbar/>
                <StyledHero img="http://www.fiba.basketball/api/img/graphic/ff630fb5-b08c-4abf-b1b9-b4a5b4fc509b/1000/1000?mt=.jpg" >
                    <Banner title="Calendrier" subtitle="bla bla bla bla bla " />
                </StyledHero>
                <section className="blac">
                    <Title title="Calendrier" />
                    <MaterialTableDemo/>
                </section>
                <FooterPage/>
            </div>
        )
    }
}