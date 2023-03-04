import React from 'react'
import Nav from "../components/navbar";
import Footer from '../components/footer';
import { UilTruck } from '@iconscout/react-unicons'
import { UilVirusSlash } from '@iconscout/react-unicons'
import { UilPagelines } from '@iconscout/react-unicons'
import { UilThumbsUp } from '@iconscout/react-unicons'

function About() {
  return (
  
    <section id="about">
        <Nav/>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Avobeauty
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-green sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">The</span>
            </span>{" "}
            Brief Introduction
          </h2>
          <p className="text-justify text-gray-700 md:text-md">
            Avoskin is a local brand from Yogyakarta, Indonesia, founded in
            2014. Avoskin has many variants of skincare products, facial
            cleansers, moisturizers, to exfoliation products. Embrace the change, begin your beauty
            evolution, and join us in celebrating the spirit of natural beauty.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-50">
              <UilTruck></UilTruck>
                
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-pink-600">
                
                Worldwide Shipping
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear. We never had the chance to.
              </p>
            
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-50">
             <UilVirusSlash></UilVirusSlash>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-pink-600">
                Cruelty Free
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea robin Antarctic cod. Yellow-and-black
                triplefin gulper South American Lungfish mahi-mahi,
                butterflyfish glass catfish soapfish ling gray mullet!
              </p>
            
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-50">
             <UilPagelines></UilPagelines>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-pink-600">
                Organic-based Products
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                Hercules Morse, as big as a horse and Mrs Falani were up to no
                good with a bunch of crook pikelets.
              </p>
            
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-50">
             <UilThumbsUp></UilThumbsUp>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-pink-600">
                BPOM Approved
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling. Inspiring, invest
                synergy capacity building, white paper; silo, unprecedented
                challenge B-corp problem-solvers.
              </p>
            
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default About