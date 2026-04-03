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
    </div>
  );
}

export default App;
