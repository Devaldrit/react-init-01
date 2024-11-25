import './App.css';

function Navbar() {
  return(
    <nav class="navbar">
        <ul class="navbar-menu">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Équipe</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
}

function Header() {
  return(
    <header class="header">
        <h1 class="header-title">Découvrez notre équipe</h1>
        <p class="header-subtitle">Une présentation élégante et moderne</p>
    </header>
  );
}

function About() {
  return(
    <section class="about">
        <div class="about-content">
            <h2>À propos de nous</h2>
            <p>
            Nous sommes une équipe de passionnés, spécialisée dans la création d'interfaces utilisateur élégantes et fonctionnelles.
            Avec une expertise en développement et en design, nous aimons créer des expériences web modernes et interactives.
            </p>
        </div>
    </section>
  );
}
function Card(props){
  return(
    <div class="card">
            <img src={props.imgLink} alt="Portrait" class="card-image" />
            <div class="card-content">
                <h2 class="card-title">{props.name}</h2>
                <p class="card-description">
                  {props.description}
                </p>
                <Button></Button>
            </div>
        </div>
  );
}

function Button() {
  return(
    <button class="card-button">En savoir plus</button>
  );
}

function Footer() {
  return(
    <footer class="footer">
        <ul class="footer-links">
            <li><a href="#">À propos</a></li>
            <li><a href="#">Projets</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Mentions légales</a></li>
        </ul>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <div class="cards-container">
          <Card imgLink="https://i.pravatar.cc/300?img=11" name="Maxime Faubert" description="Développeur Front-end passionné par les interfaces élégantes et réactives." />
          <Card imgLink="https://i.pravatar.cc/300?img=10" name="Emilie Goudreau" description="Designer créatif avec un œil pour le détail et l'harmonie des couleurs. " />
          <Card imgLink="https://i.pravatar.cc/300?img=9" name="Alice Lafond" description="Chef de projet avec une expertise en gestion agile et communication efficace" />
          <Card imgLink="https://i.pravatar.cc/300?img=8" name="Paul Guédry" description="Développeur Full-stack aimant résoudre des problèmes complexes avec du code propre. " />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
