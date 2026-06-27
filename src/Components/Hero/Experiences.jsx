import HideAndShow from "../Project"

export default function Experiences() {
    return(
        <>
            <h2>Experience</h2>
            <div className='experiences'>
                <div className='experience'>
                    <div className='job-title'><b>Software Support & Operations Specialist</b> | OZY Community Stores</div>
                    <div className='job-experience-time'>December 2025 - May 2026</div>

                    <div className='job-summary'>Prototyped small internal tools and explored ways to structure Square POS data to support operational visibility at a small retail business.</div>
                    
                    <HideAndShow title="View Impact">
                    <ul className='job-experience-descriptors'>
                        <li>Identified operational gaps and began prototyping small internal tools to help the owner better understand inventory trends.</li>
                        <li>Explored ways to pull and structure Square POS data for internal use, experimenting with early-stage workflows to support visibility. </li>
                        <li>Documented processes and technical notes to support future improvements and repeatability.</li>
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
                    
                    <div className='job-summary'>Automated end-to-end testing scripts with Cypress and contributing to logging system refactors for a migration initiative.</div>
                    
                    <HideAndShow title="View Impact">
                    <ul className='job-experience-descriptors'>
                        <li>Contributed to a production logging migration initiative by refactoring and testing application logging, supporting a projected ~40% reduction in logging costs.</li>
                        <li>Developed Cypress end-to-end tests to improve system reliability and catch regressions earlier in the pipeline.</li>
                        <li>Documented work in Jira and Confluence to support team knowledge sharing and cross-functional collaboration.</li>
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
                    <div className='job-title'><b>Software Engineer Intern</b> | Walmart Global Tech</div>
                    <div className='job-experience-time'>May 2023 - August 2023</div>

                    <div className='job-summary'>Implemented a front-end feature in Angular for international Sam's Club Point of Sale (POS) systems used by Mexico Associates.</div>

                    <HideAndShow title="View Impact">
                    <ul className='job-experience-descriptors'>
                        <li>Implemented a front-end feature in Angular for Sam’s Club Mexico Associate POS, integrating UI components with backend APIs under senior guidance.</li>
                        <li>Supported parallel development by learning React and contributing to multi-application workflows.</li>
                        <li>Presented team products to peers, sharing key learnings and achievements. </li>
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

            </div>
        </>
    )
}