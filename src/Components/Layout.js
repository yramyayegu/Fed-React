import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Welcome from './Welcome'
import Service from './Service'
import Blog from './Blog'


function Layout() {

    return (
        <div>
            <Header />
            <div className="container">
                <Banner />
                <Welcome />
            </div>
            <div className="container">
                <Service />
                <Blog />
            </div>
            <Footer  />
        </div>
    )
}


export default Layout;