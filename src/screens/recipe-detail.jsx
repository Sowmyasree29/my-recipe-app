import { useParams } from "react-router-dom";
import Header from "../components/header";
import { useEffect, useState } from "react";
import axios from "axios";


function RecipeDetail() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const apiData = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
                setRecipe(apiData.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [recipeId]);

    if (loading) {
        return <h2>Please wait...</h2>;
    }

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            {/* Recipe Image */}
                            <img src={recipe.image} className="card-img-top" alt={recipe.name} />
                            <div className="card-body">
                                <h3 className="card-title">{recipe.name}</h3>
                                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                                <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                                <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
                                <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
                                <p><strong>Servings:</strong> {recipe.servings}</p>
                                
                             
                                <h5>Ingredients:</h5>
                                <ul>
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                                
                              
                                <h5>Instructions:</h5>
                                <ol>
                                    {recipe.instructions.map((instruction, index) => (
                                        <li key={index}>{instruction}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecipeDetail;
