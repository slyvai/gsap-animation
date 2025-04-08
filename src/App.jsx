import { useEffect } from 'react'
import gsap from 'gsap'
import './App.css'

function App() {
  useEffect(() => {
    gsap.fromTo('.square', {
      scale: 0,
      opacity: 0,
      rotate: 360,
      duration: 1
    }, {
      scale: 1,
      opacity: 1,
      rotate: 0,
      duration: 1
    })

    const tl = gsap.timeline();

    tl.to('.circle', {
      x: 100,
      duration: 1,
    })
    .to('.circle', {
      y: 100,
      duration: 1,
    }, "-=0.5")
    .to('.triangle', {
      y: -100,
      duration: 1,
    }, "-=0.5")
    .to('.triangle', {
      x: 100,
      duration: 1,
    }, "-=0.5")

    gsap.fromTo('.dot', {
      y: 30,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      stagger: 1,
    })


  }, [])

  return (
    <>
      <div className='container'>
      <div className='square'></div>
      <div className='circle'></div>
      <div className='triangle'></div>

      <div className='dot-container'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      </div>
    </>
  )
}

export default App
