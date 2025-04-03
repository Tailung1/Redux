import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.ts'
import accountReducer from './store.v1.ts'




createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <accountReducer />
  </StrictMode>
);
