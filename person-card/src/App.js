import CenteredCard from "./components/CenteredCard";
import Image from "./components/img/profile.png";

function App() {
  return (
    <div className="App">
      <header className="container">
        <CenteredCard>
          <div className="profile">
            <p>
              {" "}
              <img src={Image} alt="Profile" />
            </p>
          </div>
          <span>PROCURA-SE</span>
          <div>
            <p>HTML, CSS, JavaScript, React, React Native, NodeJS, MySQL</p>
            <p>Full Stack</p>
          </div>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
