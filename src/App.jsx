import './App.css'
import "./styles/main.scss"
import {Routes, Route} from "react-router-dom"
import {CountryProvider} from "./context/CountryContext"
import Header from "./components/Header/Header"
import Countries from "./pages/Countries/Countries"
import CountryDetails from './pages/CountryDetails/CountryDetails'

function App() {

  return (
    <>
      <CountryProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Countries />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
        </Routes>
      </CountryProvider>
    </>
  )
}

export default App
