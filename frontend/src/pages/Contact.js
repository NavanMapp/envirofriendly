import React from "react"
import Navbar from "../components/Navbar"
import ContactComponent from "../components/ContactComponent"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div className='p-10'>
      <Navbar />
      <ContactComponent />
      <Footer />
    </div>
  )
}
