import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/project";
import Contact from "../components/contact";

import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          key="viewport width"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <div>
        <div id="#About">
          <About />
        </div>

        <div id="#Skill">
          <Skill />
        </div>

        <div id="#Project">
          <Project />
        </div>

        <div id="#Contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
