import React from 'react'


const Projects = () => {
    return ( 
    <div class="portofolio">
        <h2>Portofolio</h2>
        <div className="porto-cards">
            <div className="card">
                <img src="./photos/coffee-shop-1209863_1920.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Coffee Shop</h5>
                  <a target="_blank" href="https://mohamed67-67.github.io/Coffe-Shop/" >Lets Go</a>
                </div>
              </div>
            <div className="card">
                <img src="./photos/colored-pencils-1506589_1920.jpg" className="card-img-top" alt="..."/>
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