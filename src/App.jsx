import { Home } from './components/home/home'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Experience from './components/experience/Experience'
import Projects from './components/Projects/Projects'
import Footer from './components/footer/footer'


function App() {
  return (
  <div className='bg-[#171d32] h-auto w-full '>
    <Navbar />
    <Home />
    <About />
    <Experience/>
    <Projects/>
    <Footer/>
  </div>
  )
}

export default App
