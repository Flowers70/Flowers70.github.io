import './portfolio.css'
import {useState} from 'react'
import React from 'react'

function LFTextContainer({name, date, info, buttonText, buttonFunction}){
    return (
        <div className='portfolio-info'>
            <div className='portfolio-decor-line'></div>
            <div className='portfolio-content'>
                <div className='portfolio-heading'>
                    <h2>{name}</h2>
                    <div>{date}</div>
                </div>
                <p>
                {
                    info.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}<br /><br />
                        </React.Fragment>
                    ))
                }
                <br></br>
                </p>
                <button onClick={buttonFunction}>{buttonText}</button>
            </div>
        </div>
    );
}

function MultiMediaContainer({externalSources, technologies, tools, imagePath}){
    return(
        <div className='portfolio-additional-info'>
            <h2>Additional Information</h2>
            <div className='additional-info-content'>
                <div className='leftCol'>
                    <div className='image-carousel'>
                        <img src={imagePath}></img>
                    </div>
                    <div style={{display: externalSources.length > 0 ? "block" : "none"}}>
                        <h3>External Sources</h3>
                        <ul>
                            {
                                externalSources.map((link, index) => (
                                    <li key={index}><a href={link} target="_blank">{link}</a></li>
                                ))
                            }
                        </ul>
                    </div>       
                </div>
                <div className='rightCol'>
                    <div style={{display: technologies.length > 0 ? "block" : "none"}}>
                        <h3>Technologies Used</h3>
                        <ul>
                            {
                                technologies.map((technology, index) => (
                                    <li key={index}>{technology}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div style={{display: tools.length > 0 ? "block" : "none"}}>
                        <h3>Tools Used</h3>
                        <ul>
                            {
                                tools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PortfolioProject({name, date, info, buttonText, externalSources, technologies, tools, imagePath}){
    const [isVisible, setIsVisible] = useState(true);
  
    const toggleDisplay = () => {
      setIsVisible(!isVisible);
    };

    return(
        <>
            <div style={{display: isVisible ? 'grid' : 'none'}} className='portfolio-box'>
                <LFTextContainer name={name} date={date} info={info} buttonText={buttonText} buttonFunction={toggleDisplay} />
                <MultiMediaContainer externalSources={externalSources} technologies={technologies} tools={tools} imagePath={imagePath} />
            </div>
            <div style={{display: isVisible ? 'none' : 'flex'}} className='portfolio-demo'>
                <video controls>
                    <source src="videos/Take_Action_Demo.mp4" type="video/mp4"></source>
                    Sorry, you're browser does not support this video.
                </video>
                <button onClick={toggleDisplay}>Go Back To The Project Page</button>
            </div>            
        </>
    );
}