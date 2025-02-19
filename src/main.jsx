import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import "tailwindcss";
import App from './App'
import React from "react";
import { Team } from "./pages/Team";
import { Pricelist } from "./pages/Pricelist";
import { Contact } from "./pages/Contact";
import {Home} from "./components/Home"
import Navbar from "./components/Navbar";
import { Services } from "./components/Services";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route index element={<Home/>}></Route>  
          {/* <Route path to="/" element={<Navbar/>}></Route> */}
            <Route path="home" element={<Home/>}></Route>
            <Route path="team" element={<Team/>}></Route>
            <Route path="price list" element={<Pricelist/>}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="service" element={<Services />}></Route>
            
      
    </Routes>
    <App />
  </BrowserRouter>
);
