import './App.css'
import { Layout } from "./components"
import { AlertProvider } from "./context/AlertContext"
import { Router } from "./router"

function App() {
  return (
    <AlertProvider>
      <Layout>
        <Router />
      </Layout>
    </AlertProvider>
  )
}

export default App
