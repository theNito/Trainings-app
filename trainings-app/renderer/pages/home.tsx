import React from "react"

import Navbar from "../components/Navbar"
import dynamic from "next/dynamic"

const Field = dynamic(() => import("../components/Field"), {
  ssr: false,
})

const Home = () => {
  return (
    <>
      <Navbar />
      <Field />
    </>
  )
}

export default Home
