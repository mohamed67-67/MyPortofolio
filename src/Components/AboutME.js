import React from 'react'
import Edu from './Edu'
import Skills from './Skills'
// import '../about.css'

// const anim = document.querySelector('.titlee')
// anim.classList.add('title-anim')
const AboutMe = () => {
    return ( 
        <section>
            <div class="mainee">
                <div className="photoe">
                    <img src="./photos\Cool Kids - Study.png" alt=""/>
                    <div className="socialse">
                        <a target="_blank" href="https://www.facebook.com/mohamed.sharkawey.7/"><i className="fab oo fa-facebook-f"></i></a> 
                        <a target="_blank" href="https://twitter.com/sharkawey393"><i className="fab oo fa-twitter"></i></a>
                        <a target="_blank" href="https://www.instagram.com/mohamedsharkawey/"><i className="fab oo fa-instagram"></i></a>
                    </div>
                </div>
                <div className="titlee">
                    <h1>ALright !</h1>
                    <p>i'm mohamed sharkawey basicaly i'm a civil engineer made a shift career as a front end developer. Right now i'm seeking opportunity as one, i'm self learner and passionate about this field. so any further infrormation you shall find in my <a href="https://drive.google.com/file/d/1kKZeejPEVclCTsAD4iyKL_LvWXnwlvBM/view?usp=sharing" target="_blank">Resume</a> and my portofolio or you can contact me</p>
                </div>
            </div>
            <Skills/>
            <Edu/>
        </section>
     );
}
 
export default AboutMe;