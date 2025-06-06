import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

export function Portfolio(){
    return (
        <>
            <div className="recipes">
                <div className="spotlight">
                    <div className="titleDate">
                        <h2>Take Action!</h2>
                        <div>May 27, 2025</div>
                    </div>
                    <img src="/images/Take_Action.png"></img>
                    <p>A to-do app developed using Angular & Express JS</p>
                    <Link to="/take-action"><button>Learn More</button></Link>
                </div>
                <div className="gallery">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </>
    );
}