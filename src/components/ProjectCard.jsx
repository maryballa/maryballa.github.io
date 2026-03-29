import '../css/projectcard.css';

const ProjectCard = ({ name, image, description, tag }) => {
  return (
    <div className="project-card">
      <div className="img-wrapper">
        <img
          src={image}
          alt={name}
          className="style-img"
        />
      </div>
      <div className="info-wrapper">
        <h2 className="pr-title">{name}</h2>
        <p>{description}</p>
        {tag && <span className="pr-tag">{tag}</span>}
      </div>
    </div>
  );
};

export default ProjectCard;
