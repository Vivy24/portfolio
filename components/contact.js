import style from "../styles/contact.module.css";
const Contact = () => {
  return (
    <div className={style.contactSection}>
      <div className={style.header}>
        <h1>Contact</h1>
      </div>
      <div className={style.content}>
        <div className={style.download}>
          <h3>Download</h3>
          <a data-testid="clink" href="./resume.pdf" download="Resume">
            Resume
          </a>
          <a
            data-testid="clink"
            href="./coverletter.pdf"
            download="Cover Letter"
          >
            Cover Letter
          </a>
        </div>
        <hr />

        <div className={style.contactInfo}>
          <h3>Reach Me</h3>
          <ul>
            <li>
              <a data-testid="clink" href="https://github.com/Vivy24">
                Github
              </a>
            </li>
            <li>
              <a
                data-testid="clink"
                href="https://www.linkedin.com/in/vivyvuong/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a data-testid="clink" href="mailto: vngvy48@gmail.com">
                vngvy48@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
