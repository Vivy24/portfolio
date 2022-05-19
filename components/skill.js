import style from "../styles/skill.module.css";

const Skill = () => {
  return (
    <div className={style.skillSection}>
      <div className={style.header} data-testid="skill">
        <h1>Skill</h1>
      </div>
      <div className={style.content}>
        <div className={style.skillGroup}>
          <div className={style.skill} data-testid="skill">
            <h3>Education</h3>
            <p>Advanced Diploma in Seneca College</p>
          </div>

          <div className={style.skill} data-testid="skill">
            <h3>Languages</h3>
            <p>Javascript,C,C++,Java,Python</p>
          </div>

          <div className={style.skill} data-testid="skill">
            <h3>Front-end</h3>
            <p>
              HTML,CSS,CSS module,Bootstrap,TailwindCSS,ReactJS,Redux,NextJS,EJS
            </p>
          </div>

          <div className={style.skill} data-testid="skill">
            <h3>Back-end</h3>
            <p>NodeJS,ExpressJS,Flask,Firebase</p>
          </div>

          <div className={style.skill} data-testid="skill">
            <h3>Storage</h3>
            <p>MongoDB,PostgreSQL,MySQL,Firebase</p>
          </div>
        </div>

        <div className={style.skillGroup}>
          <div className={style.skill} data-testid="skill">
            <h3>Automation Test</h3>
            <p>Jest,React-Testing-Library</p>
          </div>

          <div className={style.skill} data-testid="skill">
            <h3>Web hosting</h3>
            <p>Heroku,Github Pages,Vercel,Firebase</p>
          </div>
          <div className={style.skill} data-testid="skill">
            <h3>Operating Systems</h3>
            <p>Window,Linux/Unix</p>
          </div>
          <div className={style.skill} data-testid="skill">
            <h3>Software Tools</h3>
            <p>Visual Studio,Visual Studio Code,Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
