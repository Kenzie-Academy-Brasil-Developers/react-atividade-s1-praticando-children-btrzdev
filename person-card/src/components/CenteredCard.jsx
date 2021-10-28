import "./style.css";
import Image from "./img/profile.png";

function CenteredCard({ children }) {
  return (
    <div className="div-card">
      <div className="profile">
        <p>
          {" "}
          <img src={Image} alt="Profile" />
        </p>
      </div>
      <span>PROCURA-SE{children}</span>
      <div>
        <p>HTML, CSS, JavaScript, React, React Native, NodeJS, MySQL</p>
        <p>Full Stack</p>
      </div>
    </div>
  );
}

export default CenteredCard;
