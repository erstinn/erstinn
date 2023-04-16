import React, {useState, useMemo, createContext} from 'react'
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies.jsx";
import './styles/components/AhiruBar.scss';


function App() {
    const [menu_class, setMenuContents] = useState("menu hidden")
    const [isMenuClicked, setMenuClicked] = useState(false)
    const updateMenu = () => {
        if (!isMenuClicked){
            setMenuContents("menu visible");
        }else {
            setMenuContents("menu hidden");
        }
        setMenuClicked(!isMenuClicked)
    }


    const [theme, setTheme] = useState('light'); //great for themes

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
    <div className={theme}>
        <div className='ahiru-bar' >
            {!isMenuClicked ?(
                <img onClick={updateMenu} className='ahiru-bar__img' src="/images/crywatercute.png" alt=""/>
            ) : (
                <img onClick={updateMenu} className='ahiru-bar__img' src="/images/futoimizuniiruriru.png" alt=""/>
            )}
            {/*todo enclose sht inside menu in `Container`*/}
            <div className={`ahiru-bar__sidebar  ${menu_class}`}></div>
            <div className='ahiru-bar__lightdark'>
                <img onClick={changeTheme}
                         className='ahiru-bar__lightdark' src="/images/hanahiru.png" alt=""/>
                        {theme==='light' ?(<span> Light Mode</span>) : (<span> Dark Mode </span>)}
                <img className='ahiru-bar__lightdark' src="/images/hanahiru.png" alt=""/> English
            </div>
        </div>
        {/*<CssBaseline />*/}
        <Intro />
        <Projects />
        <Hobbies />
    </div>
  )
}

export default App
