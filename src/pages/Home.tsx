import { FC } from 'react'
import Navbar from '../layouts/Navbar'
import Hero from '../layouts/Hero'
import Overview from '../layouts/Overview'
import Reviews from '../layouts/Reviews'
import Activities from '../layouts/Activities'
import Marquee from '../layouts/Marquee'
import Footer from '../layouts/Footer'

const Home: FC = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Overview />
        <Reviews />
        <Activities />
        <Marquee />
        <Footer />
    </div>
  )
}

export default Home