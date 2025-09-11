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
    const [animateAbout, setAnimateAbout] = useState(false);
    const [animatePortfolio, setAnimatePortfolio] = useState(false);

    const navigate = useNavigate();

    const underConstruction = () => {
        alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
    };

    const goToAboutMe_Page = () => {
        setAnimateAbout(true);
    }

    const goToPortfolio_Page = () => {
        setAnimatePortfolio(true);
    }

    // const goToPage = (pageName) => {
    //     if(pageName === "aboutMe"){
    //         setAnimateAbout(true);
    //     }else if(pageName === "portfolio"){
    //         setAnimatePortfolio(true);
    //     }        
    // }

    const animateEndHandler = () => {
        console.log("ENDED");
        if(animateAbout){
            navigate('/aboutMe');
        }else if(animatePortfolio){
            navigate('/portfolio');
        }
    }    

    return(
        <GoldenBoxes 
        topL={<h1 className={`title ${animateAbout || animatePortfolio ? "fade" : ""}`}>Jacinth Boggess</h1>}
        bottomL={<img className={`pics ${animateAbout || animatePortfolio ? "fade" : ""}`} src="./images/Phone.png" />}
        Right={
            <div className="rotated">
                <button className={`button_portfolio ${animateAbout || animatePortfolio ? "fade" : ""}`} onClick={goToPortfolio_Page}>Portfolio</button>
                <button className={animateAbout || animatePortfolio ? "fade" : ""} onClick={goToAboutMe_Page} role="link">About Me</button>
                <img className={`pen ${animateAbout ? "animatePen" : ""} ${animatePortfolio ? "fade" : ""}`} src="./images/Pen.png"/>
                <div className='papers'>                    
                    <div className={`paper fakePaper ${animateAbout ? "animateFakePaper": ""} ${animatePortfolio ? "fade" : ""}`} onAnimationEnd={animateEndHandler}></div>
                    <img className={`paper ${animateAbout ? "animatePaper" : ""} ${animatePortfolio ? "fade" : ""}`} src="./images/Paper2.png"/>
                </div>
            </div> 
        }
        />
    );
}