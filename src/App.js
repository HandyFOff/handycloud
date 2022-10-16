import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Preloader from './custom/preloader/Preloader'

export default function App() {
  return (
    <>
      <Preloader/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}