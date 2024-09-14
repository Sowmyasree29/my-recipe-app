import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "../screens/login"
import Register from "../screens/registration"
import RecipeListing from "../screens/recipe-listing"
import RecipeDetail from "../screens/recipe-detail"
import Favourites from "../screens/favourites"
import { createContext,useState } from "react"



export const GlobalData=createContext()

function NavigationRouter()
{
    const[myFavourites,setMyFavourites]=useState([])
    function addToFavourites(recipe)
    {
        setMyFavourites([...myFavourites,recipe])
    }
    function removeFavourites(recipe)
    {
        const removed=myFavourites.filter((each,id)=>each.id!== recipe.id)
        setMyFavourites(removed)
        
    }
  
    return(
        <GlobalData.Provider value={{
            favourites:myFavourites,
            addToFavourites:addToFavourites,
            removeFavourites:removeFavourites

        }}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/recipeListing" element={<RecipeListing/>}/>
            <Route path="/recipeListing/:recipeId" element={<RecipeDetail/>}/>
            <Route path="/favourites" element={<Favourites/>}/>

        </Routes>
        </BrowserRouter>
        </GlobalData.Provider>
    )

}
export default NavigationRouter