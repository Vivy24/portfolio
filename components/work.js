import style from "../styles/work.module.css"
const Work = () => {
  return (
    <div className={style.workSection}>
      <div className={style.header}>
        <h1>Work</h1>
      </div>

      <div className={style.workContent}>
        <div className={style.card}>
          <div className={`${style.face} ${style.face1}`}>
            <div className={style.content}>
              <span className={style.space}></span>
              <ul>
                <li>
                  Develop an interface for a termination system that has
                  terminated over 100 members virtually.
                </li>

                <li>
                  Creates unit tests for front-end using Jasmine that covers up
                  to 75% code coverage as Azure DevOps.
                </li>

                <li>
                  Sets up back-end unit testing and integrates to Azure DevOps
                  pipeline.
                </li>

                <li>
                  Creates over 70 unit test cases to make sure a project using
                  XpertDoc library will generate correct documentation for each
                  individual and different pension plan.
                </li>
              </ul>
            </div>
          </div>
          <div className={`${style.face} ${style.face2}`}>
            <p>
              <span className={style.jobtitle}>Web Developer - Seneca VAS</span>
              <br />
              <span className={style.timeline}>
                Sep 2021 – Jun 2022 <br />
              </span>
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div className={`${style.face} ${style.face1}`}>
            <div className={style.content}>
              <span className={style.space}></span>
              <ul>
                <li>
                  Works with team leader to create a review web-based
                  application that allows Vietnamese students to read, create a
                  review to subjects, or professors in Seneca
                </li>

                <li>
                  Collaborates with 2 other team members to maintain and update
                  the VAS website group
                </li>
              </ul>
            </div>
          </div>
          <div className={`${style.face} ${style.face2}`}>
            <p>
              <span className={style.jobtitle}>
                System Developer (Co-op) - HOOPP
              </span>
              <br />
              <span className={style.timeline}>
                Sep 2022 – April 2023 <br />
              </span>
              <a
                data-testid="clink"
                href="./HOOPPReview.pdf"
                download="HOOPP Student Evaluation"
              >
                Student Evaluation
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
