

import { Link } from "react-router-dom";
import {useState} from "react";
import RecipeListing from "../screens/recipe-listing";



function Header({searchTerm,setsearchTerm,filter}) {
    function changeHandler(event)
    {
       const value=event.target.value
       setsearchTerm(value)
       filter(value)
     
    }
   

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">RecipeApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/recipeListing">Main Screen</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favourites">Favourites</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex" >
                        <input className="form-control me-2" type="search" placeholder="Search Recipes" aria-label="Search" onChange={changeHandler} value={searchTerm}/>
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
            </div>
        </nav>
    );
}

export default Header;
