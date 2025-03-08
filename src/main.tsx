import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import store from './store copy.ts'
import { deposit } from './features/accounts/accountSlice.ts'
import { createCostumer } from './features/costumers/costumerSlice.ts'

store.dispatch(deposit(2000))
console.log(store.getState())
store.dispatch(createCostumer("chicha","19123"))
console.log(store.getState());


// import "./store.v1.ts"




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
