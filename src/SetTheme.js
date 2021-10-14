import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
import { useState } from "react";
import "./App.css";
import halfSunMoon from "./assets/halfSunMoon.png";

const SetTheme = () => {

    const [theme, setTheme] = useState('dark');
    const themeToggler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return ( 
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <div className="setTheme-button">
            <img src={ halfSunMoon } className='halfSunMoon' alt='halfSunMoon' onClick={ themeToggler } />
        </div>
        </ThemeProvider>
    );


}
 
export default SetTheme;
