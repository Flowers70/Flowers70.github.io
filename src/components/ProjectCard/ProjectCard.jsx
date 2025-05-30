import './ProjectCard.css'

export function ProjectCard(){
    return(
        <>
            <div className="projectCard">
                <div className="decorativeLine"></div>
                <div className='projectInfo'>
                    <div>
                        <h3>Tic-Tac-Toe</h3>
                        <p>October 4, 2020</p>
                    </div>
                    <img src="/images/tic-tac-toe.png"></img>
                </div>
            </div>
        </>
    );
}