
import {} from "antd";
import Ways from "./routes";
import Header from "./common/header/Header"
import { BrowserRouter, Routes } from "react-router-dom";
import React from "react";




const App = () => {

  return(

    <>
   <Ways />
    </>
  )

}


function AppHeader() {
  return (

    <>

    
    <BrowserRouter>
    <Header />
      <Routes>
      </Routes>
    </BrowserRouter>
  

  
 

    </>
  )
   
}
export default AppHeader;

