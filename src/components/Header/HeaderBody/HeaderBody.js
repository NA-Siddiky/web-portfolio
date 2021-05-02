import React from 'react';
import profile from '../../../images/siddiky.png'
import './HeaderBody.css'
import ParticlesBg from 'particles-bg'

const HeaderBody = () => {
    return (
        <div className="row g-0 styleOfHeader w-100">
            <ParticlesBg type="circle" bg={true} />

            <div className="col-md-8">
                <h1>Hello, I'M <br></br> <span className="name-highlight">N.A Siddiky</span></h1>
                <h4>A Full stack Web Developer</h4>
                <p>Software engineer with professional experience in web development and information security system.</p>
            </div>
            <div className="col-md-4">
                <img className="profileImage img-fluid" src={profile} alt="" />
            </div>
        </div>
    );
};

export default HeaderBody;