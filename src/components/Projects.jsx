import React from 'react';
import {useInView} from "react-intersection-observer";
import '../styles/components/dashboard.scss'; //todo is there a way to not have to include .scss?
import '../styles/components/container.scss'; //todo is there a way to not have to include .scss?


const Projects = () => {
    const {ref: ahiRef, inView: elemIsVisible} = useInView({threshold: 0.3, triggerOnce: true,} );
    return (
        <div>
            <div className='projects-container'>
                <div ref={ahiRef} className='projects-container'>
                    <h1 className={`projects-grid__title ${elemIsVisible ? "projects-grid__fadein-down" : ''}`}>Projects</h1>
                </div>
            </div>
            <div className='projects-container'>
                <div ref={ahiRef} className={`projects-grid ${elemIsVisible ? "projects-grid__fadein-up" : ''}`}>
                    <div className='projects-grid__header'><h3>FiLedger</h3></div>
                        <a href="https://drive.google.com/drive/u/2/folders/10qci5valF2Z_ZGiyiUq1hNH9uZkj154R" target="_blank">
                            <img className='projects-grid__img' src="/images/projs/filedger.png" alt=""/>
                        </a>
                </div>
                <div ref={ahiRef} className={`projects-grid ${elemIsVisible ? "projects-grid__fadein-up" : ''}`}>
                    <div className='projects-grid__header'><h3>ahiruquiz</h3></div>
                        <a href="https://ahiruquiz.vercel.app/" target="_blank">
                            <img className='projects-grid__img' src="/images/projs/filedger.png" alt=""/>
                        </a>
                </div>
                <div ref={ahiRef} className={`projects-grid ${elemIsVisible ? "projects-grid__fadein-up" : ''}`}>
                    <div className='projects-grid__header'><h3>ducklang</h3></div>
                        <a href="https://github.com/dnahng/DuckLang" target="_blank">
                            <img className='projects-grid__img' src="/images/projs/ducklang.png" alt=""/>
                        </a>
                </div>
                <div ref={ahiRef} className={`projects-grid ${elemIsVisible ? "projects-grid__fadein-up" : ''}`}>
                    <div className='projects-grid__header'><h3>duckmovies</h3></div>
                        <a href="https://github.com/erstinn/duckmovies" target="_blank">
                            <img className='projects-grid__img' src="/images/projs/duckmovies.png" alt=""/>
                        </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
