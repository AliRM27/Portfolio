import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import qv_1 from "../../assets/qv_1.png";
import qv_2 from "../../assets/qv_2.png";
import qv_3 from "../../assets/qv_3.png";
import qv_4 from "../../assets/qv_4.png";
import qv_5 from "../../assets/qv_5.png";
import qv_6 from "../../assets/qv_6.png";
import ss_1 from "../../assets/ss_1.png";
import ss_2 from "../../assets/ss_2.png";
import ss_3 from "../../assets/ss_3.png";
import ss_4 from "../../assets/ss_4.png";
import ss_5 from "../../assets/ss_5.png";
import ss_6 from "../../assets/ss_6.png";
import ss_7 from "../../assets/ss_7.png";

import "./Projects.css";
import Project from "../Project/Project";

const Projects = () => {
  return (
    <div className="app__projects" id="projects">
      <div className="app__projects-title">
        <p style={{ fontSize: "15px", color: "rgb(123,123,123)" }}>
          Browse My Recent
        </p>
        <h1 style={{ fontSize: "50px" }}>Projects</h1>
      </div>
      <div className="app__projects-content">
        <Project
          images={[qv_1, qv_2, qv_3, qv_4, qv_5, qv_6]}
          name={"Quiz Verse"}
          gitLink={"https://github.com/AliRM27/Quiz-Verse"}
          demoLink={""}
          date={"July 2025 - Present"}
          description={
            "​​Quiz Verse is a mobile application currently under development, focusing on quiz formats and gamification elements. The app is built using React Native and is continuously extended. In addition to implementing frontend functionality, backend services such as authentication, database integration, and REST APIs are integrated. The planning, technical implementation, and ongoing development of the product are carried out independently."
          }
          stack={
            "React Native (Expo), TypeScript, Node.js, Express, MongoDB, REST APIs, Git/GitHub"
          }
          learned={
            "Through this project, I gained hands-on experience building a complete mobile product end-to-end. Key challenges included structuring scalable quiz data, implementing authentication flows, and designing a reward system that encourages replayability. I also improved my understanding of clean component architecture and API communication."
          }
          isAvailable={false}
        />
        <Project
          images={[ss_1, ss_2, ss_3, ss_4, ss_5, ss_6, ss_7]}
          name={"Sustainable Marketplace App"}
          gitLink={"https://github.com/AliRM27/Sustainable-Marketplace-App"}
          demoLink={""}
          date={"January 2025 - June 2025"}
          description={
            "As part of the start-up, a mobile application inspired by the “Too Good To Go” concept was designed and developed. The goal was to enable retailers to offer surplus or unsold products from the categories of clothing, cosmetics, and toys as discounted product bundles. The focus was on implementing application logic, user interface design, and basic backend functionalities such as user authentication and data structures. The project was consciously discontinued after the completion of the prototype phase."
          }
          stack={
            "React Native (Expo), Node.js, Express, MongoDB, REST APIs, Git/GitHub"
          }
          learned={
            "This project gave me hands-on experience building a full mobile application prototype from scratch. Key challenges included translating a business idea into technical features, implementing user authentication, designing data structures, and managing the balance between rapid prototyping and clean architecture."
          }
          isAvailable={false}
        />
        <Project
          images={[img2]}
          name={"Restaurant Landing Page"}
          gitLink={"https://github.com/AliRM27/gericht-restaurant"}
          demoLink={"https://gericht-restaurant-am.netlify.app"}
          date={"May 2024"}
          description={
            "Creating an elegant digital presence for a fine-dining restaurant to display menus and ambiance. The design is form Figma."
          }
          stack={"React, UI"}
          learned={
            "Mastered advanced CSS animations and reusable component architecture in React."
          }
        />
        <Project
          images={[img1]}
          name={"GPT-5 Landing Page"}
          gitLink={"https://github.com/AliRM27/gpt5-website"}
          demoLink={"https://gpt5-landing-page.netlify.app"}
          date={"April 2024"}
          description={
            "Showcasing the potential capabilities of a future AI model. Modern landing page design. The design is form Figma."
          }
          stack={"React, UI"}
          learned={
            "Implemented modern UI principles and responsive design patterns using CSS."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
