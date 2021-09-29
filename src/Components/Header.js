import React from 'react'
import logo from './recipebook.jpg'
import style from './header.module.css'
import { BrowserRouter, Route, Switch, Link, Redirect, useLocation } from 'react-router-dom';

function Header() {
    return (
        <>
             <div className={style.bar}>
                 <div className="row">
               
                    <div className="col-3">
                      <a href="/"> <img src={logo} alt="" /></a>
                    </div>
                    <div className="col-10">

                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;
