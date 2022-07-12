import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDownloader from "react-use-downloader";
import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  const { size ,download,
    cancel, error } =
useDownloader();

const fileUrl = "/cv.pdf";
const filename = "cv.pdf";


  return (
    <div className={styles.container}>
      <div className={styles.rightScreen}>
        <Image
          className={styles.picture}
          src="/code.png"
          width={450}
          height={280}
          alt="Code Avatar"
        />
      </div>
      <div className={styles.leftScreen}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.about}>
        I am a fullStack web developer with over 5 years of experience in all levels of front-end and back-end development. My tech stack include's  Javascript/Typescript frameworks( React.js, Redux , Functional component,React Hooks,  NextJs, NestJs , NodeJs). I also have experience working with Sequelize ,TypeORM and Mongoose ORM's. My business objective is to build websites and deliver them before deadlines.
        </p>
        <ul className={styles.skillList}>
          <li>
            <span>HTML</span>
          </li>
          <li>
            <span>CSS</span>
          </li>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>TypeScript</span>
          </li>
          <li>
            <span>REACT JS</span>
          </li>
          <li>
            <span>NEXT JS</span>
          </li>
          <li>
            <span>Node JS</span>
          </li>
          <li>
            <span>Express</span>
          </li>
          <li>
            <span>MY SQL</span>
          </li>
          <li>
            <span>MONGO DB</span>
          </li>
          <li>
            <span>Firebase</span>
          </li>
        
        </ul>
        <button className={styles.resumeButton} onClick={() => download(fileUrl, filename)} >  Download Resume <FontAwesomeIcon icon={faDownload}/>  </button>
        {/* <a className={styles.resumeButton} href="#">
          Download Resume <FontAwesomeIcon icon={faDownload} />
        </a> */}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
