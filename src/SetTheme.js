import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
import { useState } from "react";
import "./App.css";
import halfSunMoon from "./assets/halfSunMoon.png";

const SetTheme = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    const toggleTheme = (currentTheme) => {
        const nextTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme)
        window.location.reload()
    }
    
    return ( 
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <div className="setTheme-button">
            <img src={ halfSunMoon } className='halfSunMoon' alt='halfSunMoon' onClick={ () => toggleTheme(theme) } />
        </div>
        </ThemeProvider>
    );
} 

 
export default SetTheme;
