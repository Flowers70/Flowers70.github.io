import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { JournalEntry } from "../components/JournalEntry/JournalEntry";

export function Portfolio(){
    let goldenNmbr = 0.618;
    let bigGoldenBox_Height = window.innerHeight;
    let bigGoldenBox_Width = bigGoldenBox_Height * (1 + goldenNmbr);

    const journalStyle = {
        width: bigGoldenBox_Width,
        height: bigGoldenBox_Height
    };

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const workInProgress = () => {
        alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
    }

    return (
        <>
            {/* Journal/Book */}
            <div className={`journal ${loaded ? "onLoad" : ""}`} style={journalStyle}>
                <div className="cover">
                    {/* Left page */}
                    <div className="page">
                        <div className="pageInfo">
                            <h1 >Portfolio</h1>
                            <div>
                                <Link to="/">Jacinth Boggess</Link>
                                <Link to="/aboutMe">About Me</Link>
                            </div>
                        </div>
                        <div><Link onClick={workInProgress}><h1>Take Action!</h1></Link> May 9, 2025</div>
                        <img src="./images/Take_Action.png"></img>
                    </div>
                    {/* Right page */}
                    <div className="page">
                        <JournalEntry oldProject="true" navLink="/projects/Tic-Tac-Toe.htm" image="./images/tic-tac-toe.png" title="Tic-Tac-Toe"
                        date="August 20, 2020" bulletPoints={["The first web application I created using HTML, CSS, and JS!"]}></JournalEntry>
                        
                        <JournalEntry oldProject="true" navLink="/projects/PasswordGenerator.html" image="./images/keys1.png" title="Password Generator" date="May 27, 2021"
                        bulletPoints={["I wanted to create something useful while continuing to learn JS."]}></JournalEntry>
                    </div>
                </div>                
            </div>
        </>
    );
}