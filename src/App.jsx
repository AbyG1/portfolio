import "./App.css";
import React, { createContext, useState,  useEffect } from "react";
import { Link } from "react-scroll";
import AboutMe from "./Pages/Home/AboutMe";
import ContactMe from "./Pages/Home/ContactMe";
import Footer from "./Pages/Home/Footer";
import HeroSection from "./Pages/Home/HeroSection";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null)



function App() {


  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

//////////
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
       setTheme((curr) => (curr === 'light' ? 'dark' : 'light')); 
    }

  return (
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    
          <div className="App" id ={theme}>
                

          <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
              <h3>Aby George</h3>
            </div>
            <a
              className={`nav__hamburger ${navActive ? "active" : ""}`}
              onClick={toggleNav}
            >
              <span className="nav__hamburger__line"></span>
              <span className="nav__hamburger__line"></span>
              <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
              <ul>
                <li>
                  <Link
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="heroSection"
                    className="navbar--content"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="AboutMe"
                    className="navbar--content"
                  >
                    About Me
                  </Link>
                </li>




                <li>
                  <Link
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="MyPortfolio"
                    className="navbar--content"
                  >
                    Projects
                  </Link>
                </li>
                
                <li>
                  <Link
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="navbar--content"
                  >
                  Contact Me
                  </Link>
                </li>
                <li>
                  
                  <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
                </li>
              </ul>
            </div>
     
    </nav>



              
                
                  <HeroSection />
                  <AboutMe />
                  <MyPortfolio />
                  <ContactMe />
                  <Footer />
            

          </div>
    </ThemeContext.Provider>
  );
}

export default App;
