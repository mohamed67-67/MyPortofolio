import React from 'react'


const Skills = () => {
    return ( 
    <div className="more">

        <h3 className="active">Skills</h3> 

        <div className="skills">
            <div className="html">
                <i className="fab fa-html5"></i>
                <p>HTML</p>
            </div>
            <div className="css">
                <i className="fab fa-css3-alt"></i>
                <p>CSS</p>
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
                <p>Basics Of React and Redux</p>
            </div>
            
        </div>
    </div>
     );
}
 
export default Skills;