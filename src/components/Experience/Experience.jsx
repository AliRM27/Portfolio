import certificate from "../../assets/Praktikumszeugnis_Ali.pdf";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">
              Startup – Founder & Developer
            </h2>
            <div className="article-container">
              <p>
                I founded and developed multiple software products as part of my
                own start-up, taking responsibility for planning,
                implementation, and technical decision-making. My work included
                frontend development, basic backend logic, authentication, and
                data structures. Through this experience, I gained strong
                practical insight into building and validating real digital
                products.
              </p>
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">
              Frontend Intern – abcfinlab
            </h2>
            <div className="article-container">
              <p>
                During my internship at abcfinlab, I worked within a frontend
                team on an Angular-based application. My main focus was writing
                and executing end-to-end tests using Playwright, as well as
                supporting quality assurance and bug analysis. I quickly adapted
                to new tools and workflows in a professional software
                development environment.
              </p>
              <div className="experience-btn-container">
                <button
                  className="btn experience-btn"
                  onClick={() => window.open(certificate, "_blank")}
                >
                  Internship Certificate
                </button>
                <button
                  className="btn experience-btn"
                  onClick={() => window.open("https://abcfinlab.de/", "_blank")}
                >
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
