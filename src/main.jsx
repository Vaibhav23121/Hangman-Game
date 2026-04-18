
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
// import { WordContextProvider } from './components/context/WordContext.js';

createRoot(document.getElementById('root')).render(
  // by wrapping whole app by WordContext.Provider so that we can access WordContext from anywhere and .provider is a component in react which is used to wrap whole app
  
    <BrowserRouter>
      <App />
    </BrowserRouter>

    
)
