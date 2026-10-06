import React from "react";
import  './styles/Section.scss';
import yogi2 from './assets/yogiimg2.jpg';

const Section=()=>{
    return(
        <div className="sections">
          <div className="sections_container">
              <div className="section_img">
                 <img src={yogi2} alt="" />
               </div>
               <div className="section_content">
                 <h1>Yogita Awate</h1>
                 <p className="coloredpara">Experience in frontened and backend development</p>
                 <p className="coloredpara">Asp.Net, MVC ,.Net Core Development</p>
                 <p className="coloredpara">.Node.js</p>
                 <p className="coloredpara">.angular</p>
                 <p className="coloredpara">React</p>
                 <p className="coloredpara">Python</p>
                 <p className="coloredpara">Microsoft Azure</p>
               </div>
          </div>
        </div>
    )
}

export default Section;