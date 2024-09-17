import React, { useRef } from 'react';
import './CourseCards.css';
import java from '../../Components/Assests/java.jpeg'

export default function CourseCards() {
    const courseCardsWrapperRef = useRef(null); 

    const scrollLeft = () => {
        if (courseCardsWrapperRef.current) {
            courseCardsWrapperRef.current.scrollBy({
                left: -250, 
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (courseCardsWrapperRef.current) {
            courseCardsWrapperRef.current.scrollBy({
                left: 250, 
                behavior: 'smooth',
            });
        }
    };

    return (
     <div className="parentContainer">
        <div className="courseCardsContainer">
            <button className="scrollButton left" onClick={scrollLeft}>
                &#10094; 
            </button>

            <div className="courseCardsWrapper" ref={courseCardsWrapperRef}>
            <section id="card1" className="card">
          <img src={java} alt="Java" />
          <div className="card__content">
            <p className="card__title">Java Programming</p>
            <p className="card__description">Learn core concepts of Java programming.</p>
          </div>
        </section>
        <section id="card2" className="card">
          <img src={java} alt="Java" />
          <div className="card__content">
            <p className="card__title">Advanced Java</p>
            <p className="card__description">Master advanced Java techniques.</p>
          </div>
        </section>
        <section id="card3" className="card">
          <img src={java} alt="Java" />
          <div className="card__content">
            <p className="card__title">Spring Boot</p>
            <p className="card__description">Develop enterprise applications with Spring Boot.</p>
          </div>
        </section>
        <section id="card4" className="card">
          <img src={java} alt="Java" />
          <div className="card__content">
            <p className="card__title">React.js</p>
            <p className="card__description">Build interactive UIs with React.js.</p>
          </div>
        </section>
        <section id="card5" className="card">
          <img src={java} alt="Java" />
          <div className="card__content">
            <p className="card__title">Node.js</p>
            <p className="card__description">Create server-side applications with Node.js.</p>
          </div>
        </section>
        <section id="card6" className="card">
          <img src={java} alt="Java" />
          <div className="card__content">
            <p className="card__title">Full-Stack Development</p>
            <p className="card__description">Learn full-stack development with MERN stack.</p>
          </div>
        </section>
            </div>

            <button className="scrollButton right" onClick={scrollRight}>
                &#10095;
            </button>
        </div>
        </div>
    );
}
