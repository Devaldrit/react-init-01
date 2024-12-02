import classes from "./Footer.module.css";
export function Footer() {
    return(
      <footer className={classes.footer}>
          <ul className={classes["footer-links"]}>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Projets</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Mentions légales</a></li>
          </ul>
      </footer>
    );
  }
export default Footer