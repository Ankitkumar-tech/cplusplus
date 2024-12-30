import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Welcome from './Welcome'
// import ProfileCard from './Day1/ProfileCard'
// import { RenderList } from './Day1/RenderList'
// import Counter from './Day2/Counter/Counter'
// import Homepage from './Day3/Homepage'
import { Routes ,Route } from 'react-router-dom'
import Homepage from './Day3/Homepage'
import AboutPage from './Day3/AboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<AboutPage/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
     
    </>
  )
}

export default App
