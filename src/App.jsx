import "./index.css";
import { Banner } from './Components/Banner/Banner'
import { StatSection } from './Components/Banner/StatSection'
import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/Navbar/Navbar'

function App() { 

  return (
    <>
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <StatSection></StatSection>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
