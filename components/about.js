import { useState } from "react";
import style from "../styles/about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHandPeace } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const About = () => {
  const [more, setMore] = useState(false);

  const readMore = () => {
    setMore((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className={style.aboutSection}>
      <div className={style.helloSection}>
        <h1>Hello</h1>
      </div>
      <div className={style.content}>
        <img alt="vivyimg" src="image/vyvy.png" />

        <h2 data-testid="title">
          Vivy Vuong <br />
          Web Developer
        </h2>
        <p data-testid="content">
          Hi{" "}
          <FontAwesomeIcon
            style={{ fontSize: "25px" }}
            icon={faHandPeace}
          ></FontAwesomeIcon>{" "}
          ,
          <br /> My name is Vivy Vuong. I'm a Computer Science student, who
          passionate about becoming a web developer. My coding journey begin
          when I was in grade 11. In grade 11, I took the Introduction to
          Computer because everyone told me it is an easy course. Also, I'm very
          good at Math at that time , so I thought I would do well in that
          class. Eventually, I fell in love with coding after this class. I love
          spending time designing and finding the best solution to solve the
          problem.
          {more ? (
            <span className={style.readMore} data-testid="more">
              Then, during the covid time, I'm learning code as a hobby in my
              free time. I'm self-learning through many online materials such as
              Youtube, FreeCodeCamp, Udemy, etc. After learning a programming
              language, I asked myself which industry I should focus on? After a
              week of researching, I decided to become a web developer because I
              think that website is the most powerful tool for us, developers,
              to "talk" to the world since everyone can easily get access to the
              web. This is how my journey to become a good programmer and a good
              web developer begins.
            </span>
          ) : (
            <span className={style.dots} data-testid="less">
              ...
            </span>
          )}
          <button onClick={readMore} data-testid="button">
            Read {more ? "Less" : "More"}
          </button>
        </p>

        <hr />
      </div>
    </div>
  );
};

export default About;
