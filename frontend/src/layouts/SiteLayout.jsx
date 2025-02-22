import PropTypes from "prop-types"
import Footer from "../components/layout/footer/Footer"
import Header from "../components/layout/header/Header"
import Search from "../components/modals/Search"
import Dialog from "../components/modals/Dialog"
import Policy from "../components/layout/policy/Policy"
import { useState } from "react";

function SiteLayout({children}) {
    const [isSearchShow, setIsSearchShow] = useState(false);
    const [isDialogShow, setIsDialogShow] = useState(true);
  return (
    <div className="site-layout">
        <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
        <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow}/>
        <Header setIsSearchShow={setIsSearchShow}/>
            {children}
        <Policy/>
        <Footer/>
    </div>
  )
}

export default SiteLayout

SiteLayout.propTypes = {
    children : PropTypes.node
}
