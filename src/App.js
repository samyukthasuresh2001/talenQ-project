import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { ThemeProvider, styled } from 'styled-components';
import {lightTheme,darkTheme,GlobalStyles} from './themes.js'
import Banner from './components/Banner';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';

const StyledApp =styled.div`

  color: ${props => props.theme.fontColor}



`



function App() {

  const [theme,setTheme] = useState("light");

  const themeToggler = ()=> {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
   <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}
   >
    <GlobalStyles />
    <StyledApp>
      <Header/>
      <Banner/>
      <Section1 />
      <Section2 />
      <Section3/>
      
      <Footer/>
    <button onClick={() => themeToggler()}>change</button>

    </StyledApp>

   </ThemeProvider>
  );
}

export default App;
