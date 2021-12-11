import './ProjectField.css';

const ProjectField = ({ titule, link, subtitule, image }) => {
  return (
    <div className="project-field">
      <h2 className="project-field__titule">
        <a href={link} target="_blank">
          {titule}
        </a>
      </h2>
      <p className="project-field__subtitule">{subtitule}</p>
      <div className="project-field__logo">
        <a href={link} target="_blank">
          <img className="project-field__img" src={image} />
        </a>
      </div>
    </div>
  );
};

export default ProjectField;
