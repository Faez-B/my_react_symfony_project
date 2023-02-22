import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/app.css';
import './bootstrap';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
    return (
      <div className="App">
        <header>
            <h1>React App</h1>
        </header>

        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
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
  