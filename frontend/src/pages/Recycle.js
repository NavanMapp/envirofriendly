import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Tips from '../components/Tips'
import UserEntry from '../components/UserEntry'

/**
 * 
 * @returns Opening page of the app
 * combining Navbar & Add details components
 */

function Recycle() {

  return (
    <div>
      <Navbar />
      <Tips />
      <UserEntry />
    </div>
  )
}

export default Recycle