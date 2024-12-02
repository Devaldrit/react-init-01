import classes from "./Header.module.css";
export function Header() {
    return(
      <header className={classes.header}>
          <h1 className={classes["header-title"]}>Découvrez notre équipe</h1>
          <p className={classes["header-subtitle"]}>Une présentation élégante et moderne</p>
      </header>
    );
  }