import React from 'react';
import MyProjects from './MyProjects';
import myPic from '../../Assets/myProfile/myImg.jpg';




const MyPortfolio = () => {
    return (
      <div>
        <div class="avatar online lg:mx-96 mx-20 mt-8">
          <div class="w-52 rounded-full text-center">
            <img src={myPic} alt="" />
          </div>
        </div>
        <div className="lg:flex">
          <div class="mockup-phone mt-12">
            <div class="camera"></div>
            <div class="display">
              <div class="artboard artboard-demo phone-1">
                <h1 className="text-xl mt-2">
                  <span className="font-bold">list of skills:-</span>
                  <li>HTMl</li>
                  <li>CSS</li>
                  <li>Bootstarp</li>
                  <li>ReactBootstarp</li>
                  <li>Tailwind</li>
                  <li>Daisyui</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Firebase</li>
                  <li>NodeJS</li>
                  <li>MongoDB</li>
                  <li>GITHUB</li>
                  <li>React Others Library</li>
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:w-96 mr-20 mt-56">
            <h1 className="text-primary text-center font-bold text-4xl">
              Mehedi Hasan
            </h1>
            <h1 className="text-center text-xl">
              <span className="font-bold">Email:-</span>mehedimugdho72@gmail.com
            </h1>
            <h1 className="text-center text-xl mt-2">
              <span className="font-bold">
                Educational Background:-
                <br />
              </span>
              <li>
                I'm studying in B.A 4th year at Gvt Titumir College in
                Department of Phelosophy
              </li>
            </h1>
            <div className="ml-12">
              <h1 className="text-primary font-bold text-xl">My Projects:-</h1>
              <li>
                <a target="blank" href="https://fitness-fighter-c557a.web.app/">
                  Fitness-fighter
                </a>
              </li>
              <li>
                <a target="blank" href="https://star-furniture-63cf3.web.app/">
                  Star Furniture
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://majestic-pixie-5b95ac.netlify.app/home"
                >
                  The Bike-Booster House
                </a>
              </li>
            </div>
          </div>
        </div>
        <MyProjects></MyProjects>
      </div>
    );
};

export default MyPortfolio;
