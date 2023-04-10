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
        <div>
            {/*todo may remove burger completely*/}
            <div className='ahiru-bar' >
                {!isMenuClicked ?(
                    <img onClick={updateMenu} className='ahiru-bar__img' src="/images/crywatercute.png" alt=""/>
                ) : (
                    <img onClick={updateMenu} className='ahiru-bar__img' src="/images/futoimizuniiruriru.png" alt=""/>
                )}
                {/*todo enclose sht inside menu in `Container`*/}
                <div className={`ahiru-bar__sidebar  ${menu_class}`}></div>
                {/*//placeholder, change image when ive drawn, should have */}
                <div className='ahiru-bar__lightdark'>
                    <img className='ahiru-bar__lightdark' src="/images/hanahiru.png" alt=""/> Light Mode
                    <img className='ahiru-bar__lightdark' src="/images/hanahiru.png" alt=""/> English
                </div>
            </div>

        </div>

    );
};

export default AhiruBar;
