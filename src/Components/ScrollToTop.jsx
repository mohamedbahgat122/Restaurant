// ScrollToTopButton.js
import { ArrowUpward } from "@mui/icons-material";
import { Icon } from "@mui/material";
import React, { useState, useEffect } from "react";



const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  

  // Show button when page is scrolled down by a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.scrollBtn}>
          up
        </button>
      )}
    </div>
  );
};

const styles = {
  scrollBtn: {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default ScrollToTopButton;
