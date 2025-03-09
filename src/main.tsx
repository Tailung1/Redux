import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import store from './store copy.ts'
// import { deposit } from './features/accounts/accountSlice.ts'
// import { createCostumer } from './features/costumers/costumerSlice.ts'

// // import "./store.v1.ts"




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
