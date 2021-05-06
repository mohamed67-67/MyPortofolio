import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {motion} from 'framer-motion' 


const AboutMe = () => {

    const variant = {
        animate: {
            y : [20, -20],
            transition : {
                yoyo : Infinity
            }
        }
    }

    useEffect(()=>{
        AOS.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: false, 
            mirror: true, 
            anchorPlacement: 'bottom-bottom', 
    
        })
    })
    return ( 
        <section data-aos='slide-left' className='sectionAbout'>
            <div class="mainee">
                <div className="photoe">
                    <img src="./photos/Humaaans - Wireframe.png" alt=""/>
                    <div className="socialse">
                        <a target="_blank" href="https://www.facebook.com/mohamed.sharkawey.7/"><i className="fab oo fa-facebook-f"></i></a> 
                        <a target="_blank" href="https://twitter.com/sharkawey393"><i className="fab oo fa-twitter"></i></a>
                        <a target="_blank" href="https://www.instagram.com/mohamedsharkawey/"><i className="fab oo fa-instagram"></i></a>
                        <a target="_blank" href="https://github.com/mohamed67-67"> <i class="fab oo fa-github"></i> </a>
                    </div>
                </div>
                <div className="titlee">
                    <h1>ALright !</h1>
                    <p >i'm mohamed sharkawey basicaly i'm a civil engineer made a shift career as a front end developer. Right now i'm seeking opportunity as one, i'm self learner and passionate about this field. so any further infrormation you shall find in my <a href="https://drive.google.com/drive/folders/1aBoJDIvDK2nEWGyCj0-okaEdelYychsg?usp=sharing" target="_blank">Resume</a> and my portofolio or you can contact me</p>
                </div>
            </div>
        </section>
     );
}
 
export default AboutMe;