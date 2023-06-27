import './App.css'
import BroPoints from './components/BroPoints'
import Featured from './components/Featured'
import Footer from './components/Footer'
import HeaderImage from './components/HeaderImage'
import HowItWorks from './components/HowItWorks'
import MealPacks from './components/MealPacks'
import MostPopularMeals from './components/MostPopularMeals'
import NavBar from './components/NavBar'
import PopularMeals from './components/PopularMeals'

function App() {
  return (
    <>
      <NavBar />
      <HeaderImage />
      <MealPacks />
      <HowItWorks />
      <MostPopularMeals />
      <BroPoints />
      <PopularMeals />
      <Featured />
      <Footer />
    </>
  )
}

export default App
