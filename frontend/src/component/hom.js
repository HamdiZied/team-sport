import React from 'react'
import Hero from '../component/element/hero'
import Banner from '../component/element/banner'
import Navbar from '../component/element/Navbar'
import Slid from '../component/element/imgg'

import  RecipeReviewCard  from '../component/element/card'
import  FooterPage  from '../component/element/footer'

export default function hom() {
    return (
        <div >
        <Navbar/>
        <Hero>
            <Banner title="home" subtitle="bla bla bla" />
        </Hero>
        <div className="blac">
        <RecipeReviewCard />
        <Slid />
        <FooterPage/>
        </div>
        </div>
    )
}
