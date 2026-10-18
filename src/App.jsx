import "./index.css";
import { Banner } from './Components/Banner/Banner'
import { StatSection } from './Components/Banner/StatSection'
import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/Navbar/Navbar'
import { StepsSection } from "./Components/Banner/StepSection";
import { PricingSection } from "./Components/Banner/PricingSection";

function App() { 

  return (
    <>
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <StatSection></StatSection>
        {/* Premium Digital Tools  */}
        <StepsSection></StepsSection>
        <PricingSection></PricingSection>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
