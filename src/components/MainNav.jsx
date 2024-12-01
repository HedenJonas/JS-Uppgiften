import React, { useEffect, useState } from 'react'

const MainNav = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    

        useEffect(() => {
          const storedThemeMode = localStorage.getItem('themeMode')

          if(storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
          } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark')
          }
        
        }, [])
        
        // Tog hjälp av chatgpt med denna del:
        const handleThemeToggle = () => {
            setIsDarkMode(prevMode => {
                const newMode = !prevMode;
                localStorage.setItem('themeMode', newMode ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', newMode);
                return newMode;
            })
        }

    return (
        <nav aria-label="main-navigation" className="nav">
            <div className="navbar">
                <a href="index.html" className="silicon"><img src="images/favicon.svg" alt="silicon logotype." /><span>Silicon</span></a>
                <div className="featuresnav">
                    <a className="featureslink" href="features.html">Features</a>
                    <a className="featureslink" href="#">Contact</a>
                </div>
                <div className="toggle">
                    <span id="darkmodetext" className="togglelabel">Dark mode</span>
                    <label className="switch">
                        <input type="checkbox" id="darkmode-switch" checked={isDarkMode} onChange={handleThemeToggle}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <a id="auth-signin" className="btn-signin" href="#">
                    <i className="fa-thin fa-user-large"></i>
                    <span className="sign-in-up">Sign in / up</span>
                </a>
                <button className="drop-down"><i className="fa-sharp fa-light fa-bars"></i></button>
            </div>
        </nav>  
  )
}

export default MainNav