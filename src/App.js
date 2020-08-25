import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects"
import RemoteWork from "./remotework/RemoteWork"
import Contact from "./contact/Contact"
import Footer from "./footer/Footer"


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
