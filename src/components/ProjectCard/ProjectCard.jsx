import './ProjectCard.css'
import { Link } from 'react-router-dom';

export function ProjectCard({linkPath="/tic-tac-toe", title="Tic-Tac-Toe", date="October 4, 2020", imagePath="/images/tic-tac-toe.png"}){
    return(
        <Link to={linkPath}>
            <div className="projectCard">
                <div className="decorativeLine"></div>
                <div className='projectInfo'>
                    <div>
                        <h3>{title}</h3>
                        <p>{date}</p>
                    </div>
                    <img src={imagePath}></img>
                </div>
            </div>
        </Link>
    );
}