import React from "react";
import './styles/Header.scss';
import {Close, close, MenuBookOutlined} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useState } from "react";


const Header =()=>{

    const [active, setActive]= useState(false);

    const showmenu=()=>{
        setActive(!active)
    }



    return(
        <div className="header">
            <div className="header_logo">
                <h1>Simplylearn </h1>
            </div>
                <nav>
                    <ul>
                        <div className="closed">
                            <Close className='close' onClick={showmenu} /> 
                        </div>
                        <li>
                            <Link to= '/'><b>Home</b></Link>
                        </li>
                              <li>
                            <Link to= '/'><b>About</b></Link>
                        </li>
                              <li>
                            <Link to= '/'><b>Portfollio</b></Link>
                        </li>
                              <li>
                            <Link to= '/'><b>Blog</b></Link>
                        </li>
                              <li>
                            <Link to= '/'><b>Contact</b></Link>
                        </li>
                    </ul>
                </nav>
                <div className="changer">
                     <MenuBookOutlined className="menu" onClick={showmenu}/>
                </div>
        </div>
    )
}

export default Header;