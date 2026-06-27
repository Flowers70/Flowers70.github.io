import { useState } from "react";

export default function Achievements(){
    const [currentAchievementDisplayed, setCurrentAchievementDisplayed] = useState([]);
    const achievementsDescriptions = [
        [
            "Prototyped lightweight Power BI views and basic analytical formulas to help visualize store operations.",
            "Looked through store logs to identify small inconsistencies and operational issues that could be improved."
        ],
        [
            "Built and deployed small responsive websites using React and modular CSS, focusing on clean, simple component structure.",
            "Set up basic GitHub workflows to automate deployment steps."
        ],
        [
            "Used Git for version control, including basic branching, merging, and resolving small conflicts during prototype development.",
        ],
        [
            "Worked directly with clients to plan, build, and deploy small websites.",
            "Provided regular updates to clients and ensured they understood progress and next steps."
        ],
        [
            "Explored a centralized inventory system concept and began prototyping a simple monolithic codebase to consolidate store operations.",
            "Experimented with the Square SDK to outline how POS data could be pulled into internal tools and reduce inventory blind spots.",
            "Prototyped a simple workflow for ingesting supplier delivery data and sketched a human‑in‑the‑loop validation step to reduce manual entry.",
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
                <div onClick={() => handleAchievementClick(4, "Square SDK Inventory PoC")}><img src="/icons/lamp-icon.png" alt="idea light bulb icon"></img>Square SDK Inventory PoC</div>
                <div onClick={() => handleAchievementClick(0, "Data Auditing & Analytics")}><img src="/icons/column-chart-icon.png" alt="column chart icon"></img>Data Auditing & Analytics</div>
                <div onClick={() => handleAchievementClick(1, "Full-Stack Architecture")}><img src="/icons/laptop-icon.png" alt="laptop icon"></img>Full-Stack Architecture</div>
                <div onClick={() => handleAchievementClick(2, "Git Version Control")}><img src="/icons/branching-icon.png" alt="branching git icon"></img>Git Version Control</div>
                <div onClick={() => handleAchievementClick(3, "End-to-End Project Delivery")}><img src="/icons/tools-icon.png" alt="tools icon"></img>End-to-End Project Delivery</div>
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