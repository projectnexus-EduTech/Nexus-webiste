import React from 'react';
import './CourseCard.css';
import java from '../../Components/Assests/java.jpeg';
// import Scrolling from '../Scrolling/Scrolling';
import Why from '../Why/Why';
import Button from '../Button/Button'

export default function CourseCard() {
    return (
        <div className='CourseCardParent'>
            <div className="CourseCardwapper">
                <section id="card1" className="card">
                    <img src={java} alt="Java" />
                    <div className="card__content">
                        <p className="card__title">Java Programming 1</p>
                        <p className="card__description">Learn core concepts of Java programming.</p>
                    </div>
                </section>
                <section id="card2" className="card">
                    <img src={java} alt="Java" />
                    <div className="card__content">
                        <p className="card__title">Advanced Java 2</p>
                        <p className="card__description">Master advanced Java techniques.</p>
                    </div>
                </section>
                <section id="card3" className="card">
                    <img src={java} alt="Java" />
                    <div className="card__content">
                        <p className="card__title">Spring Boot 3</p>
                        <p className="card__description">Develop enterprise applications with Spring Boot.</p>
                    </div>
                </section>
                <section id="card4" className="card">
                    <img src={java} alt="Java" />
                    <div className="card__content">
                        <p className="card__title">React.js 4</p>
                        <p className="card__description">Build interactive UIs with React.js.</p>
                    </div>
                </section>
                <section id="card5" className="card">
                    <img src={java} alt="Java" />
                    <div className="card__content">
                        <p className="card__title">Node.js 5</p>
                        <p className="card__description">Create server-side applications with Node.js.</p>
                    </div>
                </section>
                <section id="card6" className="card">
                    <img src={java} alt="Java" />
                    <div className="card__content">
                        <p className="card__title">Full-Stack Development 6</p>
                        <p className="card__description">Learn full-stack development with MERN stack.</p>
                    </div>
                </section>
            </div>
        <Why></Why>
        <Button></Button>
        </div>
    )
}
