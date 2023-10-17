import './App.css'

// import countries from './services/countries'
import { Grid } from '@chakra-ui/react'
import Header from './components/Header'
import MainPanel from './components/MainPanel'
import Footer from './components/Footer'
import CountryPanel from './components/countries/CountryPanel'

function App() {

  return (
    <Grid
      templateRows='auto 1fr'
      templateColumns='auto'
      gap={4}
      bgColor={'blue.dark'}
      h="100vh"
      w={'100vw'}
      justifyContent={'center'}
      overflowY={'auto'}
      overflowX={'hidden'}
    >
      <Header />
      <MainPanel />
      <CountryPanel />
      <Footer />
    </Grid>
  )
}

export default App
