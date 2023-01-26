import style from "../styles/about.module.css"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMailBulk } from "@fortawesome/free-solid-svg-icons" // import the icons you need
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const About = () => {
  return (
    <div className={style.aboutSection}>
      <div className={style.helloSection}>
        <h1>Hello</h1>
      </div>
      <div className={style.content}>
        <div className={style.left}>
          <div className={style.imgContent}>
            <Image
              className={style.img}
              alt="vivyimg"
              src="/image/vyvy.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={style.titleInner}>
            <p data-testid="title">
              <span
                style={{
                  fontSize: "3em",
                  fontWeight: "bold",
                  color: "#e75480",
                }}
              >
                Vivy Vuong
              </span>{" "}
              <br />
              <span style={{ fontSize: "1.5em" }}>Web Developer</span>
            </p>
          </div>

          <div className={style.intro}>
            <p data-testid="content">
              <span style={{ textTransform: "uppercase", fontSize: "1.25em" }}>
                Personal Info
              </span>{" "}
              <br />
              My name is Vivy Vuong. I&apos;m a programmer student, who
              passionate about web development. My journey begins when I was in
              grade 11 after taking a highschool course. Since then, I have been
              self-learning and pursuing a degree{" "}
              <br className={style.styledbr} />
              in coding for 2 years.
            </p>

            <ul>
              <li>
                <a
                  href="mailto: vngvy48@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    style={{
                      color: "black",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#e75480",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                    icon={faMailBulk}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vivy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    style={{
                      color: "black",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#e75480",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Vivy24"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    style={{
                      color: "black",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#e75480",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                    icon={faGithub}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.name}>
            <p data-testid="title">
              <span style={{ textTransform: "uppercase", fontSize: "2em" }}>
                My name is
              </span>
              <br />
              <span
                style={{
                  textTransform: "uppercase",
                  fontSize: "4em",
                  fontWeight: "bold",
                  color: "#e75480",
                }}
              >
                Vivy Vuong
              </span>
              <br />
              <span style={{ fontSize: "1.2em" }}>Web Developer</span>
            </p>
          </div>
          <hr />

          <div className={style.desc}>
            <p style={{ fontSize: "1.5em" }}>
              A programmer who loves coding web to talk to the world
              <br />
              Feel free to contact me through
            </p>
          </div>
          <ul>
            <li>
              <a
                href="mailto: vngvy48@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  style={{
                    color: "black",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#e75480",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                  icon={faMailBulk}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vivyvuong/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  style={{
                    color: "black",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#e75480",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                  icon={faLinkedinIn}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Vivy24"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  style={{
                    color: "black",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#e75480",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                  icon={faGithub}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
