import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import BaseLayout from './Baselayout.jsx';
import CustomCursor from "../src/Componant/CustomCursor.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      
    <CustomCursor />
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route path='/' element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
