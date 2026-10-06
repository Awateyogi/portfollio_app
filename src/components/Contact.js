import React from "react";
import './styles/Contact.scss';
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Contact=()=>{
    return(
        <div className="contact">
           <Link to='/' >
               <ArrowBack className="arrow"></ArrowBack>
           </Link>
           <div className="inputs">
             <h1>Contact Me</h1>
             <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
               <input type="text" placeholder="Message" className="messages" />
               <button>Send</button>
           </div>
        </div>
    )
}

export default Contact;