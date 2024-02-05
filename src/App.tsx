import { BrowserRouter } from "react-router-dom"
import NavSideBar from "./components/NavSideBar"
import Router from "./routes"

function App() {

  return (
    <BrowserRouter>
      <NavSideBar />
      <Router />
    </BrowserRouter>
  )
}

export default App
