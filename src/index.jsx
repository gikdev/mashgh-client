import { App } from "@/components"
import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const container = document.querySelector("#app")
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
