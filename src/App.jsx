import {useState, useMemo, createContext} from 'react'
// import { CssBaseline } from "@mui/material"; //removes need for setting css resets
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./styles/Theme";
import AhiruBar from "./components/AhiruBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies.jsx";

function App() {

  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const ThemeContext = createContext('light'); //great for themes
  // const [count, setCount] = useState(0)


  return (
    <div className='App'>
        {/*<CssBaseline />*/}
        <AhiruBar />
        <Intro />
        <Projects />
        <Hobbies />
    </div>
  )
}

export default App
