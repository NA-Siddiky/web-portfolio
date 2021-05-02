import React from 'react';
import Resume from '../Resume/Resume';
import profile from '../../../images/Photo 2.jpg'
import './About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    return (
        <div className="row styleOfAbout">
            <div className="container about-section d-flex flex-wrap">
                <div className="sectionAbout">
                    <h3>About Me</h3>
                </div>

                <div className="col-md-6 about-img">
                    <div>
                        <img className="profileImage" src={profile} alt="" />
                    </div>

                    <div>
                        <a target="_blank" href={``}><faLinkedin></faLinkedin></a>
                        <a target="_blank" href={``}><faGithub></faGithub></a>
                    </div>

                </div>

                <div className="col-md-6 about-info">
                    <p><span>Hi! my name is Siddiky. I am a web developer. </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim voluptatum maiores tempora illo nostrum aliquid eius distinctio praesentium? Debitis commodi, nemo doloremque expedita iste odit natus explicabo rerum dignissimos totam!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis quo iste impedit, cum sapiente. Possimus deleniti tenetur cumque rem ipsum maiores tempore illo eos. Ea nisi ab est voluptate.</p>
                    <Resume></Resume>

                </div>
            </div>
        </div>
    );
};
export default About;