import classes from "./About.module.css";
export function About() {
    return(
      <section className={classes.about}>
          <div className={classes["about-content"]}>
              <h2>À propos de nous</h2>
              <p>
              Nous sommes une équipe de passionnés, spécialisée dans la création d'interfaces utilisateur élégantes et fonctionnelles.
              Avec une expertise en développement et en design, nous aimons créer des expériences web modernes et interactives.
              </p>
          </div>
      </section>
    );
}