import React, { useState } from "react";
import '../styles/components/AhiruBar.scss';

const AhiruBar = () => {
    const [menu_class, setMenuContents] = useState("menu hidden")
    const [isMenuClicked, setMenuClicked] = useState(false)
    const updateMenu = () => {
        if (!isMenuClicked){
            // setBurgerContents("burger-bar clicked");
            setMenuContents("menu visible");
        }else {
            // setBurgerContents("burger-bar unclicked");
            setMenuContents("menu hidden");
        }
        setMenuClicked(!isMenuClicked)
    }
    return (
        <div className='ahiru-bar' onClick={updateMenu}>
            {!isMenuClicked ?(
                <img className='ahiru-bar__img' src="/images/crywatercute.png" alt=""/>
            ) : (
                <img className='ahiru-bar__img' src="/images/futoimizuniiruriru.png" alt=""/>
            )}
            {/*todo enclose sht inside menu in `Container`*/}
            <div className={`ahiru-bar__sidebar  ${menu_class}`}></div>
        </div>
    );
};

export default AhiruBar;
