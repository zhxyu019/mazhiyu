import React, {useState} from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
// import Slider from 'react-slick';

export const Projects = () => {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const showPreviousProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const showNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // const carouselStyle = {
  //   transform: `translateX(-${currentProjectIndex * 100}%)`,
  // };

  
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
    

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects & Publications</h2>

      {/* <Slider {...settings}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </Slider> */}
      
      {/* <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div> */}

      <div className={styles.projects}>
        <div className={styles.carousel}>
          <button onClick={showPreviousProject}>⬅</button>
          <div>
            <ProjectCard project={projects[currentProjectIndex]} />
          </div>
          <button onClick={showNextProject}>⮕</button>
        </div>
      </div> 

    </section>
  );
};
