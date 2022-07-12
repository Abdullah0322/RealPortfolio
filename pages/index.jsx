import Image from "next/image";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/HomePage.module.css";
import {
  faGithubAlt,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4 className={styles.welcome}>Hello, I'm</h4>
        <h1 className={styles.title}>Abdullah Naveed</h1>
        <h3 className={styles.subtitle}>Full Stack Developer</h3>
        <ul className={styles.contacts}>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:abdullahnaveedmalik1999@gmail.com">
            abdullahnaveedmalik1999@gmail.com
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarker} />
            <a
              target="blank"
              href="https://goo.gl/maps/FvrdLBdokBe9G7qr6"
            >
              Pakistan, Lahore
            </a>{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <a href="tel:+923224272740">+923224272740</a>
          </li>
          {/* <li>
            <FontAwesomeIcon icon={faGithubAlt} />
            <a href="https://github.com/Abdullah0322">Github</a>
          </li> */}
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/abdullah-malik-a49301161/">
              Linkedin
            </a>
          </li>
         
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.picture_boader}>
          <Image
            className={styles.picture}
            src="/me.jpg"
            width={300}
            height={290}
            alt="Abdullah's picture"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
