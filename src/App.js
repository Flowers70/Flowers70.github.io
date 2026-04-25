import './App.css';
import Project from './Components/Project';

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
          Technology lead focused on engineering data-driven solutions to optimize business operations. Acted as a primary stakeholder interface to gather direct consumer feedback for iterative system improvements. Architected a custom inventory management application (React) and pivoted to Power BI development to deliver immediate financial visibility through ABC and Break-Even analyses. Developed an adaptive Break-Even model and used operational averages to provide clear visibility into gross margins and revenue trends. Seeking a role within an operationally mature organization to apply my technical rigor and grow as a Software Engineer.
        </div>

        <h2>Projects</h2>
        <div className="projects">

          <Project title="Finger Counting CNN">
            <ul>
              <li>Trained and evaluated a CNN model on a Kaggle finger-counting dataset through partitioning.</li>
              <li>Performed image preprocessing (normalization, resizing) and fine-tuned hyperparameters to improve accuracy.</li>
              <li>Processed video input by extracting frames, classifying each frame, and reconstructing an output video with overlaid classifications.</li>
            </ul>
          </Project>

          <Project title="Always Clean">
            <ul>
              <li>Designed and developed a responsive website for a local cleaning service.</li>
              <li>Implemented a lightweight CMS by syncing a Google Sheet to a JSON content file via a scheduled GitHub Actions workflow.</li>
              <li>Enabled non-technical updates by allowing the client to modify site content directly in Google Sheets.</li>
            </ul>
          </Project>

          <Project title="ANTicipated">
            <ul>
              <li>Designed, developed, and deployed a full-stack web app in nine days for Google’s Built-In AI Challenge.</li>
              <li>Integrated Google Custom Search and YouTube Data APIs to curate learning content.</li>
              <li>Implemented an AI-powered user recap using Chrome’s Built-In AI.</li>
            </ul>
          </Project>

        </div>

        <h2>Experience</h2>
        <div className='experiences'>

          <div className='experience'>
            <div className='job-title'><b>Technology Lead</b> | OZY Community Stores</div>
            <div className='job-experience-time'>December 2025 - April 2026</div>
            <ul className='job-experience-descriptors'>
              <li>Solved real-world problems through a highly analytical approach employing data structures, storage systems, cloud infrastructure, front-end frameworks, and other technical tools.</li>
              <li>Collaborated efficiently in teams of technical and non-technical individuals in a dynamic environment with evolving objectives.</li>
              <li>Architected and began building an internal-facing application for data ingestion, transformation, retrieval, and integration with the <span>Square POS SDK</span> and other internal systems (aka DB and future additions).</li>
            </ul>
          </div>

          <div className='experience'>
            <div className='job-title'><b>Software Engineer II</b> | Walmart</div>
            <div className='job-experience-time'>February 2025 - August 2025</div>
            <ul className='job-experience-descriptors'>
              <li>Refactored and tested a production application's logging implementation as part of a migration initiative projected to <span>reduce logging costs by ~40%.</span></li>
              <li>Automated end-to-end tests in <span>Cypress</span>, ensuring application dependability.</li>
              <li>Presented team products to peers, sharing key learnings and achievements.</li>
            </ul>
          </div>

          <div className='experience'>
            <div className='job-title'><b>Software Engineer II Intern</b> | Walmart</div>
            <div className='job-experience-time'>May 2023 - August 2023</div>
            <ul className='job-experience-descriptors'>
              <li>Developed front-end feature in <span>Angular</span> for Sam’s Club Mexico Associates POS.</li>
              <li>Learned <span>ReactJS</span> to support parallel application development.</li>
              <li>Documented work in <span>Jira and Confluence</span> to promote shared understanding.</li>
            </ul>
          </div>

          <div className='experience'>
            <div className='job-title'><b>Programming Tutor</b> | Self-Employed</div>
            <div className='job-experience-time'>February 2022 - May 2022</div>
            <ul className='job-experience-descriptors'>
              <li>Communicated programming concepts in person and virtually to ensure understanding.</li>
              <li>Encouraged a peer by guiding them through programming exercises.</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
