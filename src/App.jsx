import React, {useState, useMemo, createContext} from 'react'
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies.jsx";
import './styles/components/AhiruBar.scss';
import lang from './translations.json'


function App() {
    // const [menu_class, setMenuContents] = useState("menu hidden")
    // const [isMenuClicked, setMenuClicked] = useState(false)
    // const updateMenu = () => {
    //     if (!isMenuClicked){
    //         setMenuContents("menu visible");
    //     }else {
    //         setMenuContents("menu hidden");
    //     }
    //     setMenuClicked(!isMenuClicked)
    // }
    const [theme, setTheme] = useState('light'); //great for themes
    const [language, setLanguage] = useState("en"); // State for selected language
    const currentLanguage = lang[language];

    const changeSetLanguage = (event) => {
        setLanguage(event.target.value);
    }
    const changeTheme = () => {
        if (theme==='light') {
            setTheme('dark')
            document.body.classList.add('dark')
        } else {
            setTheme('light')
            document.body.classList.remove('dark')
        }
    }

  return (
    <div className={`${theme} ${language}`}>
        <div className='ahiru-bar' >
                {/*TODO ADD THIS in the future if i'd like to.. :)*/}
                {/*{!isMenuClicked ?(*/}
                {/*    <img onClick={updateMenu} className='ahiru-bar__img' src="/images/crywatercute.png" alt=""/>*/}
                {/*) : (*/}
                {/*    <img onClick={updateMenu} className='ahiru-bar__img' src="/images/futoimizuniiruriru.png" alt=""/>*/}
                {/*)}*/}
                {/*todo enclose sht inside menu in `Container`*/}
                {/*<div className={`ahiru-bar__sidebar  ${menu_class}`}></div>*/}
            <div className='ahiru-bar__contents'>
                <img onClick={changeTheme}
                     className='ahiru-bar__contents' src="/images/hanahiru.png" alt=""/>
                    {theme==='light' ?(<span>{currentLanguage.lightMode}</span>) :
                        (<span> {currentLanguage.darkMode} </span>)}
            </div>
            <div className='ahiru-bar__contents'>
                <img  className='ahiru-bar__contents' src="/images/hanahiru.png" alt=""/>
                {currentLanguage.langLabel}
            </div>
            <div className='ahiru-bar__language'>
                <select className='ahiru-bar__language' value={language} onChange={changeSetLanguage} id="">
                <option value="en">{currentLanguage.language}</option>
                <option value="jp">{currentLanguage.language2}</option>
                </select>
            </div>
        </div>
        <Intro lang={currentLanguage}/>
        <Projects lang={currentLanguage}/>
        <Hobbies lang={currentLanguage}/>
    </div>
  )
}

export default App
