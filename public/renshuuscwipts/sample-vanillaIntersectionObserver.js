//IntersectionObserver stuff
import {useEffect, useRef, useState} from "react";

{/*the ones to contain `ahiRef` = once react renders/shows components having it, gives us
            access to that DOM node*/}
const ahiRef = useRef();
const [elemIsVisible , setElemVisible] = useState() //store state of visibility of an element
console.log('ahiru element visible', elemIsVisible); //checking purpose
{/*access it after it renders: */}
useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]; //when the observer fires this func, change visibility state with:
        setElemVisible(entry.isIntersecting)
    })
    observer.observe(ahiRef.current)
    // console.log('ahiruefec', ahiRef.current)
}, []);
//IntersectionObserver stuff end

//todo finally, set to an element `ref = ahiRef` :)
//https://www.youtube.com/watch?v=r1auJEf9ISo