import './RecipeCard.css'

export function RecipeCard(){
    return(
        <>
            <div className="recipeCard">
                <img src="/images/arepa.png"></img>
                <div className='recipeInfo'>
                    <div className="decorativeLine"></div>
                    <div className='recipeText'>
                        <h3>Tic-Tac-Toe And something...</h3>
                        <p>October 4, 2020</p>
                    </div>
                </div>
            </div>
        </>
    );
}