import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="header">
          <h1>Jacinth Boggess</h1>
          <div className="classy-line"></div>
          <div className="nav-bar">
            <div>Portfolio</div> | <div>About Me</div>
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
      </div>

    </div>
  );
}

export default App;
