import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Awards } from "./components/Awards/Awards";
import { Publications } from "./components/Publications/Publications";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Publications />
      <Skills /> 
      <Awards/>
      <Contact />
    </div>
  );
}

export default App;
