import './Projects.css';
import ProjectField from './ProjectField/ProjectField';
import facingTech from './facing-tech-head.png';
import foremind from './foremind-logo.png';

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__titule">Projects</h1>
      <div className="projects__conjunto-de-projetos">
        <ProjectField
          titule="Facing Tech"
          subtitule="Facial Expression Recognition Technologies"
          link="https://www.facingtech.com.br/face-emotions"
          image={facingTech}
        />
        <ProjectField
          titule="Foremind"
          subtitule="Machine Learning Techonologies For Predictions"
          link="https://www.foremind.io/"
          image={foremind}
        />
      </div>
    </div>
  );
};

export default Projects;
