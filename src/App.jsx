import {useState, useMemo, createContext} from 'react'
// import { CssBaseline } from "@mui/material"; //removes need for setting css resets
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./styles/Theme";
import './styles/buttons.scss';
import AhiruBar from "./components/AhiruBar.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {

  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const ThemeContext = createContext('light'); //great for themes
  // const [count, setCount] = useState(0)


  return (
    <div className='App'>
        {/*<CssBaseline />*/}
        <AhiruBar />
        <Dashboard />
    </div>
  )
}

export default App
