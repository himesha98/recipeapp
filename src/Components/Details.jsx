import React from 'react'
import style from './details.module.css'
import { useState } from 'react';
import Recipes from './Recipe';





const Details = (props) => {



    const ingredients = props.location.detailsProps.recipe.ingredients;

    //setIngredients(props.location.detailsProps.recipe.ingredients);

    console.log(ingredients);




    console.log(props.location.detailsProps);
    //console.log(props)
    return (
        <>
            <div className="recipedetails">
                <div className="row">
                    <h4 className={style.titlemega}>{props.location.detailsProps.recipe.title}</h4>
                </div>
                <div className="row">
                    


                        <div className="col-6">
                            <img className={style.image} src={props.location.detailsProps.recipe.image} alt="" />
                        </div>
                        <div className="col-6">
                        <div className={style.card}>
                            <div className="row">
                                <div className="col-12">
                                    <div className={style.title}>{props.location.detailsProps.recipe.title}</div>
                                </div>
                            </div>



                            <div className="row"><div className="col-12"><div className={style.meal}><p>{props.location.detailsProps.recipe.meal}</p></div></div></div>
                            <div className="row"><div className="col-12"><div className={style.diet}><p>{props.location.detailsProps.recipe.diet}</p></div></div></div>
                            <div className="row"><div className="col-12"><div className={style.cuisine}><p>{props.location.detailsProps.recipe.cuisine} cuisine</p></div></div></div>
                            <ul >
                                {ingredients.map((data) => (
                                    <li className={style.listitem}>{data.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    
                </div>


            </div>
        </>
    );
}

export default Details