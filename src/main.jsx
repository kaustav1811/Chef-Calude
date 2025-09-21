/*
1. `StrictMode` is a tool for **highlighting potential problems** in a React app.
  - It doesn't render anything visible, but helps with warnings during development (e.g., detecting unsafe lifecycle methods, deprecated APIs, etc.).
2. This line imports the createRoot function from the react-dom/client package.
  - It’s part of the React 18+ API used for creating a root DOM node for rendering your React components.
3. Our app is wrapped withh strictmode so that React can check for potential problems during development.
  */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Fragment } from "react"
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)