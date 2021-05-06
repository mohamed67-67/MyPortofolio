import React from 'react';

const Footer = () => {
    return ( 
        <footer>
        <div className="get"> <h5>Get In Touch</h5> </div>
        <div className="socials-footer">
            <a target="_blank" href="https://www.facebook.com/mohamed.sharkawey.7/"><i className="fab fa-facebook-f"></i></a> 
            <a target="_blank" href="https://twitter.com/sharkawey393"><i className="fab fa-twitter"></i></a>
            <a target="_blank" href="https://www.instagram.com/mohamedsharkawey/"><i className="fab fa-instagram"></i></a>
            <a target="_blank" href="https://github.com/mohamed67-67"> <i class="fab oo fa-github"></i> </a>
        </div>
        <div className="phone">
            <i className="fas fa-mobile"></i>
            <p>01018845767 <br/> 01222893157 </p>
        </div>
        <div className="mail">
            <i className="fas fa-envelope"></i>
            <p>mohamed.sharkawey. 77@gmail .com</p>
        </div>
    </footer>
     );
}
 
export default Footer;