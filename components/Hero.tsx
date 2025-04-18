import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ButtonMagic from './ui/ButtonMagic'

const Hero = () => {
  return (
    <> 
      <div className='py-16' id='home'>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='white' />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='purple' />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='blue' />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.5] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Let`s Create Something Amazing
          </h2>

          <TextGenerateEffect
            className="text-[50px] md:text-5xl lg:text-6xl text-center"
            words="Transforming ideas into engaging web solutions."
          />

          <p className='text-center text-[15px] text-slate-200 pt-6 mb-4 max-w-xl font-montserrat tracking-wider'>
            I’m passionate about building modern, responsive websites that provide seamless user experiences and drive results for businesses. Whether it’s a portfolio, e-commerce, or custom web application, I focus on clean design, optimized performance, and scalability.
          </p>

          <div className="flex gap-3 pt-8">
          <ButtonMagic title="Explore My Work ↓" link='#projects' />
          <ButtonMagic title="Get In Touch 🤝" link='#contact' />
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Hero
