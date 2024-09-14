
import Header from "../components/header";
import { GlobalData } from "../Navigation/navigation";
import { useContext,useState } from "react";
import { Link } from "react-router-dom";




function Favourites()
{
    const{favourites,removeFavourites}=useContext(GlobalData)
    const buttonStyle={
        height:"30px",
        border:"1px solid black",
        margin:"5px",
        padding:"2px"
    }
 
    return(
        <>
         <Header/>
         {favourites.length>0?
         (
            <div className="container">
            <div className="row">
                
                {favourites.map((recipe) => (
                    <div key={recipe.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={recipe.image} className="card-img-top" alt={recipe.name} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-text"><strong>Cuisine:</strong> {recipe.cuisine}</p>
                                <p className="card-text"><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
                                <p className="card-text"><strong>Servings:</strong> {recipe.servings}</p>
                                <p className="card-text"><strong>Rating:</strong> {recipe.rating} ⭐</p>
                                <button style={buttonStyle} onClick={()=>removeFavourites(recipe)}>Remove from Favourites</button><br />
                                <Link to={`/recipeListing/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

         ):<div>no favourites</div>
         }
       
    
        </>

    )
}
export default Favourites;