import style from "../styles/navbar.module.css"
import { useState } from "react"
const Navbar = () => {
  const [chosenLink, setChosenLink] = useState(0)
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          Vivy Vuong
        </p>
      </div>

      <div className={style.link}>
        <ul>
          <li
            onClick={() => {
              setChosenLink(0)
            }}
            className={`${chosenLink == 0 && style.active}`}
          >
            <a href="#About">About</a>
          </li>
          <li
            onClick={() => {
              setChosenLink(1)
            }}
            className={`${chosenLink == 1 && style.active}`}
          >
            <a href="#Skill">Skill</a>
          </li>
          <li
            onClick={() => {
              setChosenLink(1)
            }}
            className={`${chosenLink == 2 && style.active}`}
          >
            <a href="#Work">Work</a>
          </li>
          <li
            onClick={() => {
              setChosenLink(2)
            }}
            className={`${chosenLink == 3 && style.active}`}
          >
            <a href="#Project">Project</a>
          </li>
          <li
            onClick={() => {
              setChosenLink(3)
            }}
            className={`${chosenLink == 4 && style.active}`}
          >
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
