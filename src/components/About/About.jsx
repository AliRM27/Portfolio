import exp from "../../assets/experience.png";
// import education from "../../assets/education.png";
import "./About.css";

const About = () => {
  return (
    <div className="app__about" id="about">
      <div className="app__about-content">
        <div className="app__about-content_title">
          <p style={{ fontSize: "15px", color: "grey" }}>Get To Know More</p>
          <h1 style={{ fontSize: "50px" }}>About Me</h1>
        </div>
        <div className="app__about-content-info">
          {/* <div className="app__about-box">
            <img
              src={education}
              alt="education"
              style={{ cursor: "pointer" }}
            />
            <h5 style={{ fontSize: "20px" }}>Experience</h5>
            <p style={{ fontSize: "15px" }}>2+ years</p>
            <p style={{ fontSize: "15px" }}>Web Development</p>
          </div> */}
          <div className="app__about-box">
            <img src={exp} alt="experience" style={{ cursor: "pointer" }} />
            <h5 style={{ fontSize: "20px" }}>Certifications</h5>
            <p style={{ fontSize: "15px" }}>
              <strong>Codecademy: </strong>Frontend Development
            </p>
            <p style={{ fontSize: "15px" }}>
              <strong>CS50: </strong>Computer Science
            </p>
            <p style={{ fontSize: "15px" }}>
              <strong>CS50: </strong>Python
            </p>
          </div>
        </div>
        <div className="app__about-text">
          <p>
            I am an aspiring software developer with hands-on experience through
            real-world projects, a start-up, and an internship. My main focus is
            web and mobile application development using modern technologies. I
            enjoy building complete products end-to-end and continuously
            improving my technical skills in professional environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
