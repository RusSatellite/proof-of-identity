import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { BsJustify } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import ShopPlanModal from "../pages/shopplanmodal";
import PaymentModal from "../pages/paymentmodal";
import * as Actions from "../store/actions"

export default function Header() {
  const dispatch = useDispatch();
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const showShopPlanModal = () => {
    dispatch(Actions.show_shopplan_modal());
  };


  return (
    <header className="Header container align-items-center">
      <ShopPlanModal />
      <PaymentModal />
      <Link to="/"><img src={require("../assets/logo.png")} className="Logo" alt="logo" /></Link>
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav justify-content-end d-flex align-items-center">
          <Link to="/profile" >Login to your wallet</Link>
          <button type="button" onClick={showShopPlanModal}>Become a participant</button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        { isNavVisible ? <AiOutlineClose color="#4a4e57" /> : <BsJustify color="#4a4e57" />}
      </button>
    </header>
  );
}
