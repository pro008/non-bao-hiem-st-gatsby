import React from "react"
import Layout from "../components/Layout"
import Slider from "../components/header/slider"
import About from "../components/section/v2/About"
import TheManhVideo from "../components/section/TheManhVideo"
import ChuyenNganh from "../components/section/ChuyenNganh"
import DichVu from "../components/section/DichVu"
import WhyMe from "../components/section/WhyMe"
import CardBlock from "../components/shared/CardBlock"
import SEO from "../components/SEO"
export default function Home() {
  const description = "Sản xuất mũ bảo hiểm quảng cáo theo thương hiệu uy tín hàng đầu Việt Nam"
  return (
    <Layout>
      <SEO title="Trang Chủ" description={description}/>
      <main className="page">
        <header>
          <Slider />
        </header>
        <About />
        <ChuyenNganh />
        <DichVu />
        <TheManhVideo />
        <WhyMe />
        <CardBlock />
      </main>
    </Layout>
  )
}
