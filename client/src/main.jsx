import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../src/store/Store'
import { Toaster } from "@/components/ui/sonner"

import App from './App.jsx'
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
     <Toaster position="top-right" />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
