import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  const github = "https://github.com/nicholasnoronha";
  const linkedin = "https://www.linkedin.com/in/nicholas-noronha-1b613817a/";

  return (
    <footer>
      <div className="space-between">
        <p>Developed by Nicholas Noronha</p>

        <div className="icons-container">
          <a target="_blank" href={linkedin}>
            <BsLinkedin className="footer-icon" />
          </a>

          <a target="_blank" href={github}>
            <BsGithub className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
