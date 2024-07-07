import React from 'react';
import '../CSS/Home.css';
import profImage from '../images/my-pic.jpg';

const Home = () => {
  return (
    <main id="Home">
      <section className="home-left-section">
        <h1>Hi, I am a Computer Engineer and Fullstack Web Developer</h1>
        <p>My name is Natnael Messay and I have 2 years of experience in fullstack web development, hardware, and simulations.</p>
      </section>
      <section className="home-right-section">
        <img className="prof-img" src={profImage} alt="prof" />
      </section>
    </main>
  );
};

export default Home;