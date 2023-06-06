import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Homescreen from "./screen/homescreen/Homescreen";
import Login from "./screen/loginscreen/Login";

import {BrowserRouter , Routes , Route} from 'react-router-dom'

const Layout = ({children}) => {
  const [sidebar, togglerSidebar] = useState(false);

  const handleToggleSidebar = () => togglerSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main ">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout><Homescreen /></Layout>} />
        <Route path="/auth" element={<Login />}/>
        <Route path="/search" element={<Layout><h1>Searching Results</h1></Layout>}/> 
        <Route path="*" element={<h1 className="text-center align-middle">Oops!! Page Not Found</h1>}/>      

      </Routes>

    </BrowserRouter>
  )
};

export default App;
