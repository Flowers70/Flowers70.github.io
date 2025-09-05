import { useState } from 'react'
import { RecentCard } from '../components/RecentCard/RecentCard.jsx'
// import { readFromFile } from '../utils/fileUtils'
import GoldenBoxes from '../GoldenBoxes'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function Home({content = ""}){
    // const [count, setCount] = useState(0)
    // const [aboutMeContent, setAboutMeContent] = useState("");

    // readFromFile('/data/aboutMe.txt', setAboutMeContent);

    return (
    <>
        <div className='body body-desktop'>
        <div>
            <h2>Recent</h2>
            <RecentCard background="#DC566C" description="A to-do app developed using Angular & Express JS" />
            <RecentCard background="#F7926E" section="Articles" title="The Difference Between Agile and Kanban" link="/articles" description="May 23, 2025" />
            <RecentCard background="#FCC183" section="Recipes" title="Arepas" link="/recipes" description="A mouthwatering Columbian food that is a family favorite" />
        </div>
        <div className='colB'>
            <div>
            <h2>About Me</h2>
            <p>
                {content} 
            </p>
            </div>         
        </div>
        <div className='colC'>
            <img src="/images/Jacinth-JBU-Grad-wDecor.png"></img>
        </div>
        </div>

        <div className='body body-mobile'>
        <div className='colB'>
            <div>
            <h2>About Me</h2>
            <p>
                {content}
            </p>
            </div>         
        </div>
        <div className='colC'>
            <img src="/images/Jacinth-JBU-Grad-wDecor.png"></img>
        </div>
        <div className='colA'>
            <h2>Recent</h2>
            <RecentCard background="#DC566C" description="A to-do app developed using Angular & Express JS" />
            <RecentCard background="#F7926E" section="Articles" title="The Difference Between Agile and Kanban" description="May 23, 2025" />
            <RecentCard background="#FCC183" section="Recipes" title="Arepas" description="A mouthwatering Columbian food that is a family favorite" />
        </div>
        </div>
    </>
    );
}

export function NewMain(){
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    const underConstruction = () => {
        alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
    };

    const goToPage = () => {
        setAnimate(true);
    }

    const animateEndHandler = () => {
        console.log("ENDED");
        navigate('/aboutMe');
    }    

    return(
        <GoldenBoxes 
        topL={<h1 className={`title ${animate ? "fade" : ""}`}>Jacinth Boggess</h1>}
        bottomL={<img className={`pics ${animate ? "fade" : ""}`} src="./images/Phone.png" />}
        Right={
            <div className="rotated">
                <button className={`button_portfolio ${animate ? "fade" : ""}`} onClick={underConstruction}>Portfolio</button>
                <button className={animate ? "fade" : ""} onClick={goToPage} role="link">About Me</button>
                <img className={`pen ${animate ? "animatePen" : ""}`} src="./images/Pen.png"/>
                <div className='papers'>                    
                    <div className={`paper fakePaper ${animate ? "animateFakePaper": ""}`} onAnimationEnd={animateEndHandler}></div>
                    <img className={`paper ${animate ? "animatePaper" : ""}`} src="./images/Paper2.png"/>
                </div>
            </div> 
        }
        />
    );
}