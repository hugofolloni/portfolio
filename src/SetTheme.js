import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
import { useState } from "react";
import "./App.css";
import halfSunMoon from "./assets/halfSunMoon.png";

const SetTheme = () => {

    const [theme, setTheme] = useState('light');

    window.addEventListener("load", () => {
        localStorage.getItem('theme') === null ? setTheme('light') : setTheme(localStorage.getItem('theme'));
    })

    const themeToggler = () => {
        var newTheme;
        theme === 'light' ? newTheme = 'dark' : newTheme = 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
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
