import React from 'react';
import {useInView} from "react-intersection-observer";

const Hobbies = () => {
    const {ref: ahiRef, inView: elemIsVisible} = useInView({threshold: 0.3, triggerOnce: true,} );

    return (
        <div>

            <div ref={ahiRef} className={`hobbies-grid ${elemIsVisible ? "projects-grid__fadein-down" : ''}`}>
                    <h1>Hobbies</h1>
            </div>
            <div className={`hobbies-grid ${elemIsVisible ? "projects-grid__fadein-down" : ''}`}>
                <img className='hobbies-grid__img' src="/images/hobbies/p1.jpg" alt=""/>
                <img className='hobbies-grid__img' src="/images/hobbies/p2.jpg" alt=""/>
                <img className='hobbies-grid__img' src="/images/hobbies/p3.jpg" alt=""/>
                <img className='hobbies-grid__img' src="/images/hobbies/p4.jpg" alt=""/>
                <img className='hobbies-grid__img' src="/images/hobbies/p5.jpg" alt=""/>
                <img className='hobbies-grid__img' src="/images/hobbies/p6.jpg" alt=""/>
                <img className='hobbies-grid__img' src="/images/hobbies/p7.png" alt=""/>
                <img className='hobbies-grid__img' src="/images/hobbies/p8.png" alt=""/>
                <img className='hobbies-grid__img' src="/images/hobbies/p9.jpg" alt=""/>
                <img className='hobbies-grid__img' src="/images/hobbies/p10.jpg" alt=""/>

            </div>
        </div>
    );
};

export default Hobbies;
