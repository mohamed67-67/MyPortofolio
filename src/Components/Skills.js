import React,{useEffect} from 'react'
import {$} from 'react-jquery-plugin'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Skills = () => {

    useEffect(()=>{
        AOS.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: false, 
            mirror: true, 
            anchorPlacement: 'center-center', 
    
        })
    })

    useEffect(()=>{
        $('.btnn1').on('click', function () {
            $('.btnn2').removeClass('active');
            $('.more .edu').addClass('hidebody');
            $('.more .skills').removeClass('hidebody');
            $(this).addClass('active');
        });
        $('.btnn2').on('click', function () {
            $('.btnn1').removeClass('active');
            $(this).addClass('active');
            $('.more .skills').addClass('hidebody');
            $('.more .edu').removeClass('hidebody');
        });
    })
    return ( 
        <section data-aos='fade'>
            <div className="moree">

                <h3 className="btnn1 ">Skills</h3> 
                <h3 className='btnn2 active' >Education</h3> 
            </div>
            <div className="more">



                <div className="skills hidebody">
                    <div className="html">
                        <i className="fab fa-html5"></i>
                        <p>HTML</p>
                    </div>
                    <div className="css">
                        <i className="fab fa-css3-alt"></i>
                        <i class="fab fa-sass"></i>
                        <p>CSS & basics of Sass</p>
                    </div>
                    <div className="javascript">
                        <i className="fab fa-js"></i>
                        <p>Java Script and jquery</p>
                    </div>
                    <div className="bootstrap">
                        <i className="fab fa-bootstrap"></i>
                        <p>BootStrap 4</p>
                    </div>
                    <div className="react">
                        <i className="fab fa-react"></i>
                        <p>React</p>
                    </div>
                    <div className="react">
                        <i class="fas fa-code "></i>
                        <p>Redux</p>
                    </div>
                    <div className="react">
                        <i class="fas fa-code"></i>
                        <p>Framer motion</p>
                    </div>
                    <div className="react">
                        <i class="fas fa-code"></i>
                        <p>basics of Material-UI</p>
                    </div>

                    
                </div>
            </div>

                        
            <div className="more">

                <div className="edu">
                    <div className="uni">
                        <h5>Univesity : <span>Alexandria uni Faculty of Engineering</span> </h5>
                    </div>
                    <div className="major">
                        <h5>Major : <span>BSc in Civil Engineering</span> </h5>
                    </div>
                    <div className="Class">
                        <h5>Class : <span>2018</span> </h5>
                    </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default Skills;