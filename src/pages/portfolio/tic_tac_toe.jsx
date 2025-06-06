import { PortfolioProject } from "./PortfolioProject";

export function Tic_Tac_Toe(){
    return(
        <PortfolioProject
        name="Tic-Tac-Toe"
        date="October 4, 2020"
        info={[`This Tic-Tac-Toe game is the first program I developed using an actual programming language! Previously I had been creating
        programs using Scratch. Before developing the code I began 
        by thinking through and drawing out ideas on how the application would work with guidance from my Dad. To begin I used a table and 
        styled specific borders for the iconic tic-tac-toe grid. Then the onClick event and array is used to track user moves. Logic is applied
        to determine when the game ends and the winner. At the time I wanted to provide an options for two players and a single player. So, for the
        single player I created a CPU oponnent that would randomly select an empty cell (if you want to easily win, I recommend this option 😂).`,
        `I also played with DOM (Document Object Model) manipulation to dynamically change the design of the tic-tac-toe based on a theme selected by
        the user. I had a lot of fun creating and naming these. I hope you enjoy playing!`]}
        buttonText="Play Tic-Tac-Toe!"
        externalSources={[]}
        technologies={["HTML", "CSS", "JavaScript", "JQuery"]}
        tools={[]}
        imagePath="/images/tic-tac-toe.png"
        />
    );
}