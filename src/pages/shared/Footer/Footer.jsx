import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">

            <footer className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="course">
                            <h3 className="text-light pl-5">Service</h3>
                            <ul>
                                <li><a href="/">Filmmaking</a></li>
                                <li><a href="/">Logical Thinking</a></li>
                                <li><a href="/">Italian</a></li>
                                <li><a href="/">Graphic & Web Design</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-12">
                        <ul>
                            <li><a href="/">Abut ari-line</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">FQC</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-12">
                        <img src="https://teacher-hub.netlify.app/static/media/card.c383a9df.png" alt="" className="img-fluid" />
                    </div>
                    <div className="text-center text-light">Copyright © Developer SUJAN 2021   </div>

                </div>
            </footer>

        </div>
    );
};

export default Footer;