import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import style from "../styles/embla.module.css";

import ProjectDesc from "./projectDes";

const EmblaCarousel = ({ options = { loop: true } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 5000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={style.embla}>
      <div className={style["embla__viewport"]} ref={emblaRef}>
        <div className={style["embla__container"]}>
          <div className={style["embla__slide"]} key={1}>
            <ProjectDesc
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
          </div>

          <div className={style["embla__slide"]} key={2}>
            <ProjectDesc
              name={"Fire Message"}
              des={
                "A message app that allows users to send or create a new message to other users by using Firebase Realtime database."
              }
              languageArray={["ReactJS", "Redux", "Firebase", "TailwindCSS"]}
              image={"image/projects/firemesspng.png"}
              github={"https://github.com/Vivy24/MessageApp"}
              publicLink={"https://chatfire-c0870.web.app/"}
            />
          </div>

          <div className={style["embla__slide"]} key={3}>
            <ProjectDesc
              name={"Web Storage"}
              des={
                "A CRUD (create, read, update, and delete) application that allows user can create and keep track of users developing web ideas"
              }
              languageArray={["Flask", "EJS", "MySQL", "Bootstrap"]}
              image={"image/projects/webstorage.png"}
              github={"https://github.com/Vivy24/PeerTutor"}
              publicLink={"https://websitestorage.herokuapp.com/"}
            />
          </div>

          <div className={style["embla__slide"]} key={4}>
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
          </div>

          <div className={style["embla__slide"]} key={5}>
            <ProjectDesc
              name={"Blackjack React"}
              des={
                "A mini blackjack game that allows user to compete with the computer"
              }
              languageArray={["ReactJS", "ReactContext", "CSS Module"]}
              image={"image/projects/blackjack.png"}
              github={"https://github.com/Vivy24/BlackjackReact"}
              publicLink={"https://blackjack-reactjs.vercel.app/"}
            />
          </div>
        </div>
      </div>

      <ul>
        <li
          onClick={() => {
            emblaApi.scrollTo(1);
          }}
        >
          1
        </li>
        <li
          onClick={() => {
            emblaApi.scrollTo(2);
          }}
        >
          2
        </li>
        <li
          onClick={() => {
            emblaApi.scrollTo(3);
          }}
        >
          3
        </li>
        <li
          onClick={() => {
            emblaApi.scrollTo(4);
          }}
        >
          4
        </li>
        <li
          onClick={() => {
            emblaApi.scrollTo(5);
          }}
        >
          5
        </li>
      </ul>
    </div>
  );
};

export default EmblaCarousel;
