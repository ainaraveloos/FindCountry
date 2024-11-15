import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:countryCode" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App