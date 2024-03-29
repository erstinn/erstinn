import React, {useState} from 'react';
import {useInView} from "react-intersection-observer";
import '../styles/components/container.scss'; //todo is there a way to not have to include .scss?
import '../styles/components/projects.scss'; //todo is there a way to not have to include .scss?
import lang from '../translations.json'


const Projects = (lang) => {
    const {ref: ahiRef, inView: elemIsVisible} = useInView({threshold: 0.3, triggerOnce: true,} );
    const [showBody, setShowBody] = useState(false);

    const currentLanguage = lang.lang;
    const handleMouseOver = () => {
        setShowBody(true);
    };

    const handleMouseOut = () => {
        setShowBody(false);
    };
    return (
        <div>
            <div className='projects-container'>
                <div ref={ahiRef} className='projects-container'>
                    <h1 className={`projects-grid__title ${elemIsVisible ? "projects-grid__fadein-down" : ''}`}>{currentLanguage.projects}</h1>
                </div>
            </div>
            <div className='projects-container'>
                <div ref={ahiRef} className={`projects-grid ${elemIsVisible ? "projects-grid__fadein-up" : ''}`}>
                    <div className='projects-grid__header'>
                        <h3>FiLedger <span className='projects-grid__done'>[{currentLanguage.done}]</span></h3>
                    </div>
                    <div className='projects-grid__body'>
                        <strong>{currentLanguage.techStack}:</strong> NodeJS, ExpressJS, Hyperledger Fabric, Kubernetes, Docker, CouchDB, HTML/CSS
                    </div>
                    <a href="https://drive.google.com/drive/u/2/folders/1qFdd2pMIYjAvXFflKfwu5F0QI7cH9ro0" target="_blank">
                        <img className='projects-grid__img' src="/images/projs/filedger.png" alt=""/>
                    </a>
                </div>
                <div ref={ahiRef} className={`projects-grid ${elemIsVisible ? "projects-grid__fadein-up" : ''}`}>
                    <div className='projects-grid__header'>
                        <h3>ahiruquiz <span className='projects-grid__ongoing'> [{currentLanguage.inProgress}]</span></h3>
                    </div>
                    <div className='projects-grid__body'>
                        <strong>{currentLanguage.techStack}:</strong> MERN, Redux, HTML/CSS
                    </div>
                    <a href="https://ahiruquiz.vercel.app/" target="_blank">
                        <img className='projects-grid__img' src="/images/projs/ahiruquiz.png" alt=""/>
                    </a>
                </div>
                <div ref={ahiRef} className={`projects-grid ${elemIsVisible ? "projects-grid__fadein-up" : ''}`}>
                    <div className='projects-grid__header'>
                        <h3>ducklang <span className='projects-grid__done'>[{currentLanguage.done}]</span></h3>
                    </div>
                    <div className='projects-grid__body'>
                        <strong>{currentLanguage.techStack}:</strong> NodeJS
                    </div>
                    <a href="https://github.com/dnahng/DuckLang" target="_blank">
                        <img className='projects-grid__img' src="/images/projs/ducklang.png" alt=""/>
                    </a>
                </div>
                <div ref={ahiRef} className={`projects-grid ${elemIsVisible ? "projects-grid__fadein-up" : ''}`}>
                    <div className='projects-grid__header'>
                        <h3>duckmovies <span className='projects-grid__done'>[{currentLanguage.done}]</span></h3>
                    </div>
                    <div className='projects-grid__body'>
                        <strong>{currentLanguage.techStack}:</strong> HTML, CSS, PHP
                    </div>
                    <a href="https://github.com/erstinn/duckmovies" target="_blank">
                        <img className='projects-grid__img' src="/images/projs/duckmovies.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
