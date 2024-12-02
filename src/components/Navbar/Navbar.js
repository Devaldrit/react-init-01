import Classes from './Navbar.module.css';
export function Navbar() {
    return(
      <nav className={Classes.navbar}>
          <ul className={Classes["navbar-menu"]}>
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Équipe</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
    );
  }
export default Navbar