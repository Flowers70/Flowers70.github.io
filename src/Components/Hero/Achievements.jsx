import { useState } from "react";

export default function Achievements(){
    const [currentAchievementDisplayed, setCurrentAchievementDisplayed] = useState([]);
    const achievementsDescriptions = [
        [
            "Completed all graduation requirements for a rigorous B.S. in Computer Science a full 1.5 years ahead of schedule.",
            "Demonstrated exceptional time-management, discipline, and course-load optimization while fast-tracking core systems programming and data structures coursework."
        ],
        [
            "Engineered custom data models utilizing Power BI and linear algebra principles to obtain insightful operational metrics.",
            "Audited transaction and business logs to successfully identify critical financial leaks and structural discrepancies."
        ],
        [
            "Developed and deployed responsive web applications leveraging React, modular CSS, and clean frontend state management.",
            "Resolved complex deployment issues and optimized build performance by creating GitHub automated workflows."
        ],
        [
            "Maintained absolute source control reliability through Git workflows.",
            "Experienced in repository mirroring, upstream synchronization, conflict resolution, and interactive rebasing to maintain clean commit histories."
        ],
        [
            "Managed independent client projects from initial scope definition to final deployment.",
            "Maintained timely communication with client concerning current stage in development and key project milestone completions."
        ],
        [
            "Architected a Core Monolith: Designed and initiated development on a centralized, monolithic inventory system built to handle complex business automation within a single codebase.",
            "API Integration Design: Engineered a service layer utilizing the Square SDK to map out real-time stock level synchronization and eliminate out-of-stock data discrepancies.",
            "Automated Data Pipeline PoC: Developed a prototype pipeline to ingest supplier delivery data, successfully offloading manual data entry through a designed human-in-the-loop employee validation workflow.",
            "Algorithmic Forecasting Logic: Implemented predictive data-driven algorithms to analyze simulated consumer behavior and automatically generate smart-ordering lists with optimized product quantities.",
            "Business Intelligence Dashboard: Built a local analytics view tracking core operational metrics, including simulated top/bottom product performance and live asset valuation for compliance mapping."
        ]
    ];

    const [currentAchievementTitle, setCurrentAchievementTitle] = useState(null);

    const handleAchievementClick = (i, title) => {
        setCurrentAchievementDisplayed(achievementsDescriptions[i]);
        setCurrentAchievementTitle(title);
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "1rem";
    }

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget){
            setCurrentAchievementDisplayed([]);
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        }
    }

    return (
        <>
            <h2>Achievements</h2>
            <div className='achievements'>
                <div onClick={() => handleAchievementClick(0, "1.5-Yr Accelerated CS Graduate")}><img src="/icons/graduation-cap-icon.png" alt="graduation cap icon"></img>1.5-Yr Accelerated CS Graduate</div>
                <div onClick={() => handleAchievementClick(5, "Square SDK Inventory PoC")}><img src="/icons/lamp-icon.png" alt="idea light bulb icon"></img>Square SDK Inventory PoC</div>
                <div onClick={() => handleAchievementClick(1, "Data Auditing & Analytics")}><img src="/icons/column-chart-icon.png" alt="column chart icon"></img>Data Auditing & Analytics</div>
                <div onClick={() => handleAchievementClick(2, "Full-Stack Architecture")}><img src="/icons/laptop-icon.png" alt="laptop icon"></img>Full-Stack Architecture</div>
                <div onClick={() => handleAchievementClick(3, "Git Version Control")}><img src="/icons/branching-icon.png" alt="branching git icon"></img>Git Version Control</div>
                <div onClick={() => handleAchievementClick(4, "End-to-End Project Delivery")}><img src="/icons/tools-icon.png" alt="tools icon"></img>End-to-End Project Delivery</div>
            </div>

            {currentAchievementDisplayed.length !== 0 && (
                <div className="modal" onClick={handleModalClick}>
                    <div className='content-box'>
                        <div className="close-button" onClick={handleModalClick}>X</div>
                        <h2>{currentAchievementTitle}</h2>
                        <ul>
                            {currentAchievementDisplayed.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                        
                    </div>
                </div>
                
            )}   
        </>
    );
}