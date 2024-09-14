import {Link} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import Header from "../components/header";
import { GlobalData } from "../Navigation/navigation";



function RecipeListing() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const[searchTerm,setSearchTerm]=useState("")
    const[filterArr,setFilterArr]=useState([])
    const{addToFavourites}=useContext(GlobalData)
    const buttonStyle={
        height:"30px",
        border:"1px solid black",
        margin:"5px",
        padding:"2px"
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const apiData = await axios.get('https://dummyjson.com/recipes');
                const response = apiData.data;
                if (apiData.status === 200) {
                    setRecipes(response.recipes);
                    setFilterArr(response.recipes)
                }
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    const filtered=(searchTerm)=>
    {
        const search= recipes.filter((each,id)=>
        
         each.name.toLowerCase().includes(searchTerm)  
        

        )
        if(search)
        {
            console.log(search)
            setFilterArr(search)
        }
        
    }
    
   

    if (loading) {
        return <h2>Please wait while we are loading...</h2>;
    }

    return (
      
        <>
        <Header searchTerm={searchTerm} setsearchTerm={setSearchTerm} filter={filtered}/>
        <div className="container">
            <div className="row">
                {filterArr.map((recipe) => (
                    <div key={recipe.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={recipe.image} className="card-img-top" alt={recipe.name} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-text"><strong>Cuisine:</strong> {recipe.cuisine}</p>
                                <p className="card-text"><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
                                <p className="card-text"><strong>Servings:</strong> {recipe.servings}</p>
                                <p className="card-text"><strong>Rating:</strong> {recipe.rating} ⭐</p>
                                <button style={buttonStyle} onClick={()=>addToFavourites(recipe)} >Add to Favourites</button><br />
                                <Link to={`/recipeListing/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
      
    );
}

export default RecipeListing;
