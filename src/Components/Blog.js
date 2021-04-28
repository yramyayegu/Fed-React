import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Blog() {

    return (

        <div className="Services">

            <section id="gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                                <h5 className="card-title titl">ENno</h5>

                               
                                <div className="card-body">

                                    <p className="card-text tex">
                                        
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    
                                    </p>
                                 
                                </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                                <h5 className="card-title">Latest Posts</h5>
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                  
                                </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                                <h5 className="card-title">Stay in touch</h5>
                                
                                <div className="card-body">
<p className="card-text tex"><FontAwesomeIcon icon="tv" /> ramya.yegu@wipro.com</p>
<p className="card-text tex"><FontAwesomeIcon icon="phone" /> +91 0000000000</p>
<p className="card-text tex"><FontAwesomeIcon icon="addressbook" /> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                                    
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Blog;