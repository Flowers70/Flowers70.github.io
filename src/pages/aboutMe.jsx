import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GoldenBoxes from "../GoldenBoxes";

function AboutMe(){
    const [loaded, setLoaded] = useState(false);

    const underConstruction = () => {
        alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
    };

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <GoldenBoxes
        topL={<div className={`pageInfo ${loaded ? "onLoad" : ""}`}>
                <h1 >About Me</h1>
                <div>
                    <Link to="/">Jacinth Boggess</Link>
                    <Link onClick={underConstruction}>Portfolio</Link>
                </div>
            </div>
        }
        bottomL={<div className="picContainer"><img className={`picFrame ${loaded ? "onLoad" : ""}`} src="./images/jacinth-jbu-grad-M.jpg" srcSet="./images/jacinth-jbu-grad-S.jpg 1x, ./images/jacinth-jbu-grad-M.jpg 2x, ./images/jacinth-jbu-grad-L.jpg 3x" /></div>}
        Right={
            <div className="aboutMe rotated">
            <img className="aboutMe pen" src="./images/Pen.png"/>
            <div className="aboutMe paper">
                <span className={loaded ? "onLoad text" : ""}>
                    Hello,<br></br><br></br>
                    I am a recent Computer Science grad with experience as a Software Engineer II for Walmart.
                    I was introduced to the tech field by my Dad through Scratch when I was thirteen. I was and still am fascinated
                    by the possibilities this field provides in solving problems with creativity and logic.<br></br><br></br>
                    In my spare time I enjoy crocheting stuffed animals and clothes, reading fantasy/sci-fi books, working out with friends
                    at the gym, and continue expanding my technical skills through projects.<br></br><br></br>
                    Thank you for visiting,<br></br>
                    Jacinth Boggess
                </span>                
            </div>
            </div>            
        }
        />
    );
}

export default AboutMe;