import React from 'react';
import ReactDOM from 'react-dom/client';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
// start the Stimulus application
import './bootstrap';

function App() {
    return (
      <div className="App">
        <header>
            <h1>React App</h1>
        </header>
      </div>
    );
}
 
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
  