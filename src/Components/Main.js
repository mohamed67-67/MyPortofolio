import React from 'react'
import {Link} from 'react-router-dom'
const Main = () => {
    return ( 
        <div className="main">
            <div className="title">
                <p>Hello !</p>
                <h1>I'm Sharkawey</h1>
                <p>a Front End Developer</p>
                <Link to='/about'> <a href="" target="_blank" ><p>More About Me</p></a> </Link>
            </div>
            <div className="photo">
                <img src="./photos/135425220_154391026459811_847641596756833736_n-removebg-preview.png" alt="bb"/>
            </div>
            <div className="backphotos">
                <img src="./photos/kisspng-computer-programming-computer-icons-programmer-com-amplify-5b3e45b05d3e08.4507760015308077283819.png" alt=""/>
                <img src="./photos/kisspng-computer-icons-clip-art-5b3cf284656100.5078865115307209004153.png" alt=""/>
            </div>
        </div>
    );
}
 
export default Main;

