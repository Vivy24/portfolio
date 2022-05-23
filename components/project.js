import style from "../styles/project.module.css";
import EmblaCarousel from "./carousel";
const Project = () => {
  return (
    <div className={style.projectSection}>
      <div className={style.header} data-testid="projectTitle">
        <h1>Project</h1>
      </div>

      <div className={style.content}>
        <EmblaCarousel />
      </div>
    </div>
  );
};

export default Project;
