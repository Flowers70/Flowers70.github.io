import { RecipeCard } from "../components/RecipeCard/RecipeCard";
import './recipes.css'

export function Recipes(){
    return(
        <>
            <div className="recipes">
                <div className="spotlight">
                    <div className="titleDate">
                        <h2>Arepas</h2>
                        <div>May 27, 2025</div>
                    </div>
                    <img src="/images/arepa.png"></img>
                    <p>A mouthwatering Columbian food that is a family favorite</p>
                    <button>Get the Recipe!</button>
                </div>
                <div className="gallery">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </div>
        </>
    );
}