import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './pages/App';
import MediaMarkt from "./pages/mediaMarkt";
import SeniorFit from "./pages/seniorFit";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/mediamarkt" element={<MediaMarkt/>}/>
                <Route path="/seniorfit" element={<SeniorFit/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
