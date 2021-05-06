import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';





const Projects = () => {

  useEffect(()=>{
    AOS.init({
        duration: 2000, 
        easing: 'ease-in-out', 
        once: false, 
        mirror: true, 
        anchorPlacement: 'center-center', 

    })
})


    return ( 
    <div data-aos='fade' class="portofolio">
        <h2>Projects</h2>
        <div className="porto-cards">
            <div className="card">
                <img src="./photos/projectReact.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Coffee Shop</h5>
                  <a target="_blank" href="https://coffe-shop.netlify.app" >React project</a>
                </div>
              </div>
            <div className="card">
                <img src="./photos/projectRegular.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Coffee Shop</h5>
                  <a target="_blank" href="https://mohamed67-67.github.io/Coffe-Shop/" >Regular project</a> <br></br> <br/>
                </div>
              </div>
            <div className="card">
                <img src="./photos/projectKinder.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">KinderGarten</h5>
                  <a target="_blank" href="https://mohamed67-67.github.io/KinderGarten/." >Take a Round</a>
                </div>
              </div>
        </div>
    </div>
     );
}
 
export default Projects;