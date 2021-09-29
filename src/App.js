import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Recipe from './Components/Recipe';

import './App.css';
import Details from './Components/Details';
import About from './Components/about';
import Header from './Components/Header';



<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>


function App() {

  const APP_ID = "e4b10822";
  const APP_KEY = "febbcbf3aa26e9b26bace53b4b901b72";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');




  useEffect(() => {
    getRecipes();

  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);



  };


  const updateSearch = e => {
    setSearch(e.target.value);


  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }


  return (
    <>
    <Header/>
    <BrowserRouter>
      <div className="App">
        <div className="container-fluid ">

          <form onSubmit={getSearch} className="search-form mb-3">
            <input className="search-bar mt-3" type="text" value={search} onChange={updateSearch} />

            <button
              className="search-button"

              type="submit">search
            </button>
          </form>


          <Switch>
            <Route path="/details/" component = {Details} />
            <Route path="/"> <div className="recipes">



              {recipes.map(recipe => (
                <Recipe
                  key={recipe.recipe.idUri}
                  idUri={recipe.recipe.uri}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  cuisine={recipe.recipe.cuisineType}
                  diet={recipe.recipe.dietLabels}
                  meal={recipe.recipe.mealType}
                />))}











            </div></Route>
          </Switch>


        </div>
      </div>
    </BrowserRouter>
    </>
  )





}


export default App;
