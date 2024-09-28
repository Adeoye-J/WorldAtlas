import React, {useState, useEffect} from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
import "./toggleTheme.scss"

const ToggleTheme = () => {

    // State to track theme
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") || false);

    // Function to toggle theme
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        localStorage.setItem("theme", isDarkMode)
    };

    // Effect to apply the theme on body class
    useEffect(() => {
        if (isDarkMode) {
        document.body.classList.add('dark-mode');
        } else {
        document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    
    return (
        <div className='toggle-theme-container'>
            <a onClick={toggleTheme} className="theme-toggle-btn">
                {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
	            <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
            </a>
        </div>
    )
}

export default ToggleTheme