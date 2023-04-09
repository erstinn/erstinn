import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import '../styles/components/Cards.scss'; //todo is there a way to not have to include .scss?
import '../styles/components/Container.scss';


const Dashboard = () => {
    //IntersectionObserver stuff; to look the long version, go ../scwipts/sample-vanilla
    //todo GO LOOK OR GET EATEN BY ABSTRACTION
    const {ref: ahiRef, inView: elemIsVisible} = useInView();
    const { ref: picRef, inView: introPicIsVisible } = useInView(); //test for first card

    //IntersectionObserver stuff end

    return (
        <div>
            <div className='container'>
                <div>
                    <p>
                        <h1>Hello, こんにちは、</h1>
                        I am Erin, I am a passionate programmer. <br/> I use Arch Linux for my development setup (btw).
                        I like tinkering and making scripts to automate my daily tasks as a programmer. („• ֊ •„) <br/>
                    </p>
                    <div className='small-card-container'>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='card-grid__header'><h3>MongoDB.png</h3></div>
                            <div className='card-grid__body'>
                                <img src="/images/techstacks/icons8-mongodb-96.png" className='card-grid__body__icons' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='card-grid__header'><h3>ejs.png</h3></div>
                            <div className='card-grid__body'>
                                <img src="/images/techstacks/icons8-express-js-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='card-grid__header'><h3>react.png</h3></div>
                            <div className='card-grid__body'>
                                <img src="/images/techstacks/icons8-react-native-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='card-grid__header'><h3>nodejs.png</h3></div>
                            <div className='card-grid__body'>
                                <img src="/images/techstacks/icons8-nodejs-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='card-grid__header'><h3>php.png</h3></div>
                            <div className='card-grid__body'>
                                <img src="/images/techstacks/icons8-php-logo-80.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='card-grid__header'><h3>C++.png</h3></div>
                            <div className='card-grid__body'>
                                <img src="/images/techstacks/icons8-c++-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                        <div ref={ahiRef} className={`small-card-grid ${elemIsVisible ? "stagger" : ''}`}>
                            <div className='card-grid__header'><h3>python.png</h3></div>
                            <div className='card-grid__body'>
                                <img src="/images/techstacks/icons8-python-96.png" className='small-card-grid__img' alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='card-grid card-grid__animateCard-right'>
                    <div className='card-grid__header'><h3>Introduction.png</h3></div>
                    <div className='card-grid__body'>
                        <img src="/images/intro.png" className='card-grid__body__img' alt=""/>
                    </div>
                </div>

            </div>
            {/*<div className='container'>*/}
            {/*    <div><h3>meow</h3>ello</div>*/}
            {/*    <div>ello</div>*/}
            {/*</div>*/}

        </div>


    );
};


export default Dashboard;
