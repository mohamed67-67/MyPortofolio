import React from 'react'
import AboutMe from './AboutME'
import Projects from './Projects'
import Skills from './Skills'
import {motion} from 'framer-motion'

const Main = () => {

    const variant = {
        initial : {
            x : '100vw'
        },
        animate : {
            x : 0,
            // transition : {
            //     duration : 1
            // }
        }
    }

    
    return ( 
        <section>

        <motion.div
            variants={variant}
            initial='initial'
            animate='animate'
         className="main">
            <div className="title">
                <p>Hello !</p>
                <h1>I'm Sharkawey</h1>
                <p>a Front End Developer</p>
            </div>
            <div className="photo">
                <img  src="./photos/Lumii_20210202_185842592.png" alt="bb"/>
            </div>
            <div className="backphotos">
                <motion.img drag src="./photos/kisspng-computer-programming-computer-icons-programmer-com-amplify-5b3e45b05d3e08.4507760015308077283819.png" alt=""/>
            </div>
        </motion.div>

        <AboutMe/>
        <Skills/>
        <Projects/>
        </section>
    );
}
 
export default Main;

