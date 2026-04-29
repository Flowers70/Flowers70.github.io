import './App.css';
import HideAndShow from './Components/Project';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="header">
          <h1>Jacinth Boggess</h1>
          <div className="classy-line"></div>
          <div className="nav-bar">
            {/* <div>Portfolio</div> | <div>About Me</div> */}
          </div>
        </div>
        <div className="impact-statement">
          <div>
            <div className="impact-title">Programming</div>
            <div className="impact-description">Creativity combined with logic.</div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-line"></div>
        </div>
      </div>

      <div className="page-container profile-picture-container">
        <img src="PXL_20241119_200918417.PORTRAIT~2.jpg" alt="" />
      </div>

      <div className="adjustment-box">
        <div className="personal-statement">
          Software Engineer and CS Cum Laude Graduate focused on engineering data-driven solutions to optimize business operations. Acted as a primary stakeholder interface to gather direct consumer feedback for iterative system improvements. Architected a custom inventory management application (React) and pivoted to Power BI development to deliver immediate financial visibility through ABC and Break-Even analyses. Developed an adaptive Break-Even model and used operational averages to provide clear visibility into gross margins and revenue trends. Seeking a role within an operationally mature organization to apply my technical rigor and grow as a Software Engineer.
        </div>

        <h2>Projects</h2>
        <div className="projects">

          <HideAndShow title="Finger Counting CNN">
            <ul>
              <li>Trained and evaluated a CNN model on a Kaggle finger-counting dataset through partitioning.</li>
              <li>Performed image preprocessing (normalization, resizing) and fine-tuned hyperparameters to improve accuracy.</li>
              <li>Processed video input by extracting frames, classifying each frame, and reconstructing an output video with overlaid classifications.</li>
            </ul>
          </HideAndShow>

          <HideAndShow title="Always Clean">
            <ul>
              <li>Designed and developed a responsive website for a local cleaning service.</li>
              <li>Implemented a lightweight CMS by syncing a Google Sheet to a JSON content file via a scheduled GitHub Actions workflow.</li>
              <li>Enabled non-technical updates by allowing the client to modify site content directly in Google Sheets.</li>
            </ul>
          </HideAndShow>

          <HideAndShow title="ANTicipated">
            <ul>
              <li>Designed, developed, and deployed a full-stack web app in nine days for Google’s Built-In AI Challenge.</li>
              <li>Integrated Google Custom Search and YouTube Data APIs to curate learning content.</li>
              <li>Implemented an AI-powered user recap using Chrome’s Built-In AI.</li>
            </ul>
          </HideAndShow>

        </div>

        <h2>Technical Skills</h2>
        <div className='tech-skills'>
          <ul>
            <li>Programming Languages</li>
             <ul>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Python</li>
                <li>SQL</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>PHP</li>
                <li>C#</li>
                <li>C++</li>
                <li>C</li>
              </ul>
              <li>Frameworks & Tools</li>
              <ul>
                <li>Angular</li>
                <li>Cypress</li>
                <li>ReactJS</li>
                <li>Flask</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li>LooperPro</li>
                <li>PowerBI</li>
              </ul>
              <li>Version Control</li>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
          </ul>
        </div>

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
            </ul>
          </div>

          <div className='experience'>
            <div className='job-title'><b>Software Engineer II</b> | Walmart</div>
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
            </ul>
          </div>

          <div className='experience'>
            <div className='job-title'><b>Software Engineer II Intern</b> | Walmart</div>
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

        <h2>Education</h2>
        <div className='education'>
          <div><b>John Brown University</b> | 2020 - 2024 </div>
          <div className='degree'>Bachelor of Science, Computer Science</div>
          <ul className='accomplishments'>
            <li>Received Cum Laude</li>
            <li>GPA 3.8</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
