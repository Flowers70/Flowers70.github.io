import HideAndShow from "../Project"

export default function Experiences() {
    return(
        <>
            <h2>Experience</h2>
            <div className='experiences'>

            <div className='experience'>
                <div className='job-title'><b>Technology Lead</b> | OZY Community Stores</div>
                <div className='job-experience-time'>December 2025 - April 2026</div>

                <div className='job-summary'>Directing end-to-end technical strategy and financial modeling as the founding Technology Lead for a retail startup.</div>
                
                <HideAndShow title="View Impact">
                <ul className='job-experience-descriptors'>
                    <li>Employed data structures, storage systems, cloud infrastructure, and front-end frameworks.</li>
                    <li>Collaborated in a dynamic environment with evolving objectives.</li>
                    <li>Architected an internal-facing application for data ingestion, transformation, retrieval, and integration with the <span>Square POS SDK</span> and an internal DB.</li>
                </ul>
                </HideAndShow> 

                <ul className='skills-applied'>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Python</li>
                <li>SQL</li>
                <li>ReactJS</li>
                <li>PowerBI</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Figma</li>
                </ul>
            </div>

            <div className='experience'>
                <div className='job-title'><b>Software Engineer II</b> | Walmart Global Tech</div>
                <div className='job-experience-time'>February 2025 - August 2025</div>
                
                <div className='job-summary'>Automating end-to-end testing scripts with Cypress and executing core logging system refactors for a migration initiative.</div>
                
                <HideAndShow title="View Impact">
                <ul className='job-experience-descriptors'>
                    <li>Refactored and tested a production application's logging implementation as part of a migration initiative projected to <span>reduce logging costs by ~40%.</span></li>
                    <li>Automated end-to-end tests in <span>Cypress</span>, ensuring application dependability.</li>
                    <li>Presented team products to peers, sharing key learnings and achievements.</li>
                </ul>
                </HideAndShow>            
                
                <ul className='skills-applied'>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>TypeScript</li>
                <li>Angular</li>
                <li>Cypress</li>
                <li>ReactJS</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li>LooperPro</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Azure</li>
                </ul>
            </div>

            <div className='experience'>
                <div className='job-title'><b>Software Engineer II Intern</b> | Walmart Global Tech</div>
                <div className='job-experience-time'>May 2023 - August 2023</div>

                <div className='job-summary'>Developing front-end features in Angular for international Sam's Club Point of Sale (POS) systems used by Mexico Associates.</div>

                <HideAndShow title="View Impact">
                <ul className='job-experience-descriptors'>
                    <li>Developed front-end feature in <span>Angular</span> for Sam’s Club Mexico Associates POS.</li>
                    <li>Learned <span>ReactJS</span> to support parallel application development.</li>
                    <li>Documented work in <span>Jira and Confluence</span> to promote shared understanding.</li>
                </ul>
                </HideAndShow>   

                <ul className='skills-applied'>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Angular</li>
                <li>ReactJS</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li>Git</li>
                <li>GitHub</li>
                </ul>
            </div>

            <div className='experience'>
                <div className='job-title'><b>Programming Tutor</b> | Self-Employed</div>
                <div className='job-experience-time'>February 2022 - May 2022</div>

                <div className='job-summary'>Instructing in Python to reinforce fundamental programming concepts and logic application.</div>

                <HideAndShow title="View Impact">
                <ul className='job-experience-descriptors'>
                    <li>Communicated programming concepts in person and virtually to ensure understanding.</li>
                    <li>Encouraged a peer by guiding them through programming exercises.</li>
                </ul>
                </HideAndShow>            
                
                <ul className='skills-applied'>
                <li>Python</li>
                </ul>
            </div>

            </div>
        </>
    )
}