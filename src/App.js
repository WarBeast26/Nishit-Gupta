import React from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.css";
import {
  setupIonicReact
} from "@ionic/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { StatusBar } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";

setupIonicReact();
Capacitor.isNativePlatform() && StatusBar.setBackgroundColor({ color: "#000336" });

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" component={Home} exact={true} /> */}
        <Route path="/" element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />}/>
        <Route path="/resume" element={<Resume />} />
        <Route path="/education" element={<Resume />} />
        <Route path="/contact" element={<Contact />}/>
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>
    </BrowserRouter>
  );
}
export default App;