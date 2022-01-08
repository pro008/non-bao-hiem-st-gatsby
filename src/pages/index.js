import React from "react"
import Layout from "../components/Layout"
import Slider from "../components/header/slider"
import AllProducts from "../components/AllProducts"
import ChuyenNganh from "../components/section/ChuyenNganh"
import TheManh from "../components/section/TheManh"
import Brand from "../components/section/Brand"
import SEO from "../components/SEO"
export default function Home() {
  return (
    <Layout>
      <SEO title="Home " />
      <main className="page">
        <header>
          <Slider />
        </header>
        <AllProducts />
        <ChuyenNganh />
        <TheManh />
        <Brand />
      </main>
    </Layout>
  )
}
