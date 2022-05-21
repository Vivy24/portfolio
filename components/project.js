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
        {/* <ProjectDesc
          name={"Peer Tutor"}
          des={
            "A web-based application that allow a student to book a daily or monthly peer tutor based on their department,subject and review"
          }
          languageArray={[
            "PostgreSQL",
            "ExpressJS",
            "ReactJS",
            "Redux",
            "NodeJS",
            "Bootstrap",
          ]}
          image={"image/projects/peertutor.png"}
          github={"https://github.com/Vivy24/PeerTutor"}
        />
        <ProjectDesc
          name={"Fire Message"}
          des={
            "A message app that allows users to send or create a new message to other users by using Firebase Realtime database."
          }
          languageArray={["ReactJS", "Redux", "Firebase", "TailwindCSS"]}
          image={"image/projects/firemesspng.png"}
          github={"https://github.com/Vivy24/MessageApp"}
          publicLink={"https://chatfire-c0870.web.app/"}
          right={true}
        />

        <ProjectDesc
          name={"Jane Store"}
          des={
            "A fully functional SSR e-commercial website that uses session to keep track of a cart and customer orders"
          }
          languageArray={["ExpressJS", "MongoDB", "EJS", "Bootstrap"]}
          image={"image/projects/janestore.png"}
          github={"https://github.com/Vivy24/JaneStore"}
          publicLink={"https://janestore12.herokuapp.com/"}
        />

        <ProjectDesc
          name={"Blackjack React"}
          des={
            "A mini blackjack game that allows user to compete with the computer"
          }
          languageArray={["ReactJS", "ReactContext", "CSS Module"]}
          image={"image/projects/blackjack.png"}
          github={"https://github.com/Vivy24/BlackjackReact"}
          publicLink={"https://blackjack-reactjs.vercel.app/"}
          right={true}
        />
        <ProjectDesc
          name={"Web Storage"}
          des={
            "A CRUD (create, read, update, and delete) application that allows user can create and keep track of users developing web ideas"
          }
          languageArray={["Flask", "EJS", "MySQL", "Bootstrap"]}
          image={"image/projects/webstorage.png"}
          github={"https://github.com/Vivy24/PeerTutor"}
          publicLink={"https://websitestorage.herokuapp.com/"}
        /> */}
      </div>
    </div>
  );
};

export default Project;
