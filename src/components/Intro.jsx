import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import '../styles/components/intro.scss'; //todo is there a way to not have to include .scss?
import '../styles/components/container.scss';
import lang from '../translations.json'



const Intro = (lang) => {
    //IntersectionObserver stuff; to look the long version, go ../renshuuscwipts/sample-vanilla
    //todo GO LOOK OR GET EATEN BY ABSTRACTION
    const {ref: ahiRef, inView: elemIsVisible} = useInView({threshold: 1, triggerOnce: true,} );
    const { ref: picRef, inView: introPicIsVisible } = useInView(); //test for first card
    const currentLanguage = lang.lang;

    return (
        <div>
            <div className='intro-container'>
                <div>
                    <h1>{currentLanguage.greetingHeader}</h1>
                    <p>
                        {currentLanguage.greetingBody}
                    </p>
                    <div className='small-card-container'>
                            <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='intro-grid__header'><h3>Mongo.png</h3></div>
                            <div className='small-card-grid__body'>
                                <img src="/images/techstacks/icons8-mongodb-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='intro-grid__header'><h3>ejs.png</h3></div>
                            <div className='small-card-grid__body'>
                                <img src="/images/techstacks/icons8-express-js-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='intro-grid__header'><h3>react.png</h3></div>
                            <div className='small-card-grid__body'>
                                <img src="/images/techstacks/icons8-react-native-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='intro-grid__header'><h3>nodejs.png</h3></div>
                            <div className='small-card-grid__body'>
                                <img src="/images/techstacks/icons8-nodejs-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='intro-grid__header'><h3>php.png</h3></div>
                            <div className='small-card-grid__body'>
                                <img src="/images/techstacks/icons8-php-logo-80.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='intro-grid__header'><h3>Cpp.png</h3></div>
                            <div className='small-card-grid__body'>
                                <img src="/images/techstacks/icons8-c++-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='intro-grid__header'><h3>python.png</h3></div>
                            <div className='small-card-grid__body'>
                                <img src="/images/techstacks/icons8-python-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='intro-grid__header'><h3>k8s.png</h3></div>
                            <div className='small-card-grid__body'>
                                <img src="/images/techstacks/icons8-kubernetes-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='intro-grid__header'><h3>docker.png</h3></div>
                            <div className='small-card-grid__body'>
                                <img src="/images/techstacks/icons8-docker-80.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
                <div ref={ahiRef} className={`intro-grid ${elemIsVisible ? "intro-grid__fadein-right" : ''}`}>
                    <div className='intro-grid__header'><h3>{currentLanguage.intropng}</h3></div>
                    <div className='intro-grid__body'>
                        <img src="/images/intro.png" className='intro-grid__body__img' alt=""/>
                    </div>
                </div>
            </div>
        </div>


    );
};


export default Intro;
