import About from "../components/about";
import Skill from "../components/skill";
import Project from "../components/project";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Head from "next/head";
import style from "../styles/index.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          key="viewport width"
          content="initial-scale=1.0, width=device-width"
        />

        <link rel="shortcut icon" href="/image/vyvy.png" />
      </Head>
      <div className={style.main}>
        <Navbar />
        <div id="About">
          <About />
        </div>
        <hr />

        <div id="Skill">
          <Skill />
        </div>
        <hr className={style.right} />

        <div id="Project">
          <Project />
        </div>
        <hr />
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
