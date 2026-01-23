import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import qv_1 from "../../assets/qv_1.png";
import qv_2 from "../../assets/qv_2.png";
import qv_3 from "../../assets/qv_3.png";
import qv_4 from "../../assets/qv_4.png";

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
          images={[qv_1, qv_2, qv_3, qv_4]}
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
