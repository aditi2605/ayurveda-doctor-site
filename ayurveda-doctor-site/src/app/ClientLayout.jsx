'use client'
import "../styles/globals.css";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Loader from "../components/Loader.jsx";
import React, { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 4000); // adjust as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    return isLoading ? (
      <Loader />
    ) : (
      <>
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </>
    );
  }