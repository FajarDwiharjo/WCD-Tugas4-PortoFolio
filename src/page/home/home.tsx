import Hero from '../../komponen/home/hero'
import About from '../../komponen/home/About'
import Work from '../../komponen/home/work'
import Contact from '../../komponen/home/Contact'
import Footer from '../../komponen/footer/footer'


export default function Homepage() {
  return (
    <>  
      <main className='scroll-smooth overflow-y-hidden'>
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}