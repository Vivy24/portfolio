import style from "../styles/project.module.css"
import EmblaCarousel from "./carousel"
const Project = () => {
  return (
    <div className={style.projectSection}>
      <div
        className={style.header}
        data-testid="projectTitle"
      >
        <h1>Project</h1>
      </div>

      <div className={style.content}>
        <EmblaCarousel />
      </div>

      <div className={style.currently}>
        <h2>Projects In Progress</h2>
        <div className={style.githubLink}>
          <ul>
            <li>
              <a
                href="https://github.com/Vivy24/Movie"
                target="blank"
              >
                Movie Information website using Angular Github
              </a>
            </li>
            <li>
              <a href="">E-commerce website Backend using PERN stack Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
