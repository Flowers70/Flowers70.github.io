import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
                        {/* Just an idea with pictures. Pictures may require too much space. */}
                        <div className="table">
                            <Link onClick={workInProgress}>
                                <img alt="Some picture" src="./images/tic-tac-toe.png"></img>
                                <div>
                                    <div><h2>Tic-Tac-Toe</h2> August 20, 2020</div>
                                    <div><ul><li>The first web application I created using HTML, CSS, and JS!</li></ul></div>
                                </div>                                
                            </Link>
                            <Link onClick={workInProgress}>
                                <img alt="Some picture"></img>
                                <div>
                                    <div><h2>Password Generator</h2> May 27, 2021</div>
                                    <div><ul><li>I wanted to create something useful while continuing to learn JS.</li></ul></div>
                                </div>                                
                            </Link>
                        </div>
                        {/* <ul>
                            <Link>
                                <li><h2>Tic-Tac-Toe</h2> - August 20, 2020
                                    <ul>
                                        <li>The first web application I created using HTML, CSS, and JS!</li>
                                    </ul>
                                </li>
                            </Link>
                            <Link>
                                <li><h2>Password Generator</h2> - May 27, 2021
                                <ul>
                                    <li>I wanted to create something useful while continuing to learn JS.</li>
                                </ul>
                                </li>
                            </Link>
                            
                        </ul> */}
                    </div>
                </div>                
            </div>
        </>
    );
}