import { useState, useEffect} from 'react'
import { fetchDataFromApi } from './Utils/api'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import details from "./pages/details/Details"
import Explore from "./pages/explore/Explore"
import searchResult from "./pages/searchResult/searchResult"
import pageNotFound from "./pages/404/pageNotFound"
import Home from "./pages/Home/Home"

import './App.css'
import Details from './pages/details/Details'

function App() {

      useEffect(()=>{
       apiTesting();
      },[]);
   const apiTesting = ()=>{
       fetchDataFromApi("/movie/popular").then((res)=>{
        console.log(res);
       });
   };

  return (
    <>
       <BrowserRouter>
       {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/search/:query" element={<searchResult/>}/>
        <Route path="/explore/:mediaType" element={<Explore/>}/>
        <Route path ="*" element={<pageNotFound/>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
      </BrowserRouter> 
    </>
  )
}

export default App
