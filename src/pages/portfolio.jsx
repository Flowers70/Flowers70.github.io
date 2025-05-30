import { ProjectCard } from "../components/ProjectCard/ProjectCard";

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
                    <button>Learn More</button>
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