import * as React from "react"
import { motion } from "framer-motion"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import About from "./About/About"
import OurWork from "./OurWork/Ourwork"
import WelcomeBanner from "./WelcomeBanner/WelcomeBanner"


const Layout = ({ children }) => {
    return (
        <>
       
            <GlobalStyle />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
            >
                 <Header/>
                 <WelcomeBanner
                 title={"Welcome to Hoyrak"}
                 subTitle={"We are small desing studio from NY"}
                 />
                 <About/>
                 <OurWork/>
                 <Footer/>
            </motion.div>
        </>
    )
}

export default Layout
