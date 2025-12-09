import React from 'react'
import Hero from '../sections/Hero'
import Header from '../sections/Header'
import TopProductsSection from '../sections/TopProductsSections'
import CraftsmanshipSection from '../sections/CraftsmanshipSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'
import CategoriesSection from '../sections/CategoriesSection'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CategoriesSection/>
      <TopProductsSection />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
