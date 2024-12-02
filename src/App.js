import classes from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";
import {Card} from "./components/Card/Card";








function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <div className={classes["cards-container"]}>
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
