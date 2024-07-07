import { Link } from "react-router-dom";
import "../CSS/Project.css";
import foodOrdering from "../images/Food-Ordering.jpg";
import Game from "../images/GameArt.jpeg";

const Project = () => {
  return (
    <main id="Project">
      <h1 className="project-h1">
        Latest <span>Projects</span>
      </h1>
      <section className="project-section">
        <div className="project1">
          <Link>
            <img src={foodOrdering} alt="" />
            <div className="project-overlay">
              <h3>Food Ordering App</h3>
              <p>A modern and user-friendly food ordering application.</p>
            </div>
          </Link>
        </div>
        <div className="project2">
          <Link>
            <img src={Game} style={{maxHeight:"210px"}}  alt="" />
            <div className="project-overlay">
              <h3>E-commerce Website</h3>
              <p>A sleek and responsive e-commerce platform.</p>
            </div>
          </Link>
        </div>
        <div className="project3">
          <Link>
            <img src={foodOrdering} alt="" />
            <div className="project-overlay">
              <h3>Fitness Tracker App</h3>
              <p>A comprehensive fitness tracking application.</p>
            </div>
          </Link>
        </div>
        <div className="project4">
          <Link>
            <img src={foodOrdering} alt="" />
            <div className="project-overlay">
              <h3>Social Media Platform</h3>
              <p>A modern and engaging social media platform.</p>
            </div>
          </Link>
        </div>
        <div className="project5">
          <Link>
            <img src={foodOrdering} alt="" />
            <div className="project-overlay">
              <h3>Travel Booking App</h3>
              <p>A seamless and user-friendly travel booking application.</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Project;