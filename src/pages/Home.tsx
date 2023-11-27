import { FC } from 'react'
import Navbar from '../layouts/Navbar'
import Hero from '../layouts/Hero'
import Overview from '../layouts/Overview'

const Home: FC = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Overview />
    </div>
  )
}

export default Home