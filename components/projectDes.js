import style from "../styles/projectDesc.module.css";
const ProjectDesc = ({
  name,
  des,
  languageArray,
  image,
  github,
  publicLink,
  right,
}) => {
  return (
    <div
      data-testid="project"
      className={`${style.projectCard} ${right && style.right}`}
    >
      <img alt="projectImage" src={image} />
      <div className={style.projectContent}>
        <h4>{name}</h4>
        <p data-testid="description" style={{ textAlign: "justify" }}>
          {des}
        </p>

        <p data-testid="languages" style={{ wordWrap: "break-word" }}>
          Built by:{" "}
          {languageArray.map((language, index) => {
            if (index == languageArray.length - 1) {
              return `${language}`;
            }
            return `${language},`;
          })}
        </p>

        <a data-testid="link" href={github} target="_blank">
          Github
        </a>
        {publicLink && (
          <a
            data-testid="link"
            target="_blank"
            style={{ marginLeft: "3px" }}
            href={publicLink}
          >
            Live Web
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDesc;
