import React, { useState, useEffect } from 'react'
import Details from './Details';
import style from './recipe.module.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Component } from 'react';
import { render } from '@testing-library/react';

function setDetails() {
    return (
        <>
            <Details name="mahee" />
        </>
    );
}

function Recipes(recipe) {
    ///console.log(recipe);
    {
        return (

            <>
                <div className="col-4">
                    <div className="card mb-3 mt-3">

                        <div className="row">

                            <div className="col-5">
                                <img className={style.image} src={recipe.image} alt="" />
                            </div>
                            <div className="col-7">
                                <div className="row">
                                    <div className="col-12">
                                        <div className={style.title}>{recipe.title}</div>
                                    </div>
                                </div>



                                <div className="row"><div className="col-12"><div className={style.meal}><p>{recipe.meal}</p></div></div></div>
                                <div className="row"><div className="col-12"><div className={style.diet}><p>{recipe.diet}</p></div></div></div>
                                <div className="row"><div className="col-12"><div className={style.cuisine}><p>{recipe.cuisine} cuisine</p></div></div></div>
                                <div className="row"><div className="col-12"><div className="nav-item"><div className="button" onClick={setDetails()}>details</div></div></div></div>
                            </div>

                        </div>
                    </div>
                </div>


            </>

        );
    }
}

export default Recipes;

