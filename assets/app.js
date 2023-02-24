import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/app.css';
import './bootstrap';

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';

function App() {
    return (
      <div className="App">
        <header>
            
        </header>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
      </div>
    );
}
 
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
  