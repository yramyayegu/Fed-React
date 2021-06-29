import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Service() {

    return (

        <div className="Services">

            <section id="gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <h5 className="card-title">Responsive</h5>

                                <div className="ico">
                                    <FontAwesomeIcon icon="heart" />
                                </div>
                                <div className="card-body">

                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                                    <a href="" className="btn btn-outline-success btn-sm">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <h5 className="card-title">Multi Purpose</h5>
                                <div className="ico">
                                    <FontAwesomeIcon icon="tv" />

                                </div>

                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <a href="" className="btn btn-outline-success btn-sm">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <h5 className="card-title">Easy</h5>
                                <div className="ico">

                                    <FontAwesomeIcon icon="rocket" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <a href="" className="btn btn-outline-success btn-sm">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Service;