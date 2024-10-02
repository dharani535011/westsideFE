import React, { createContext, useEffect, useState } from 'react'

export const OtherContext=createContext()

const Othercontext = ({children}) => {
    const [up,setup]=useState(0)
    const [scrollDirection, setScrollDirection] = useState(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [tab,settab]=useState(false)
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (scrollTop > lastScrollTop) {
          setScrollDirection("down");
        } else if (scrollTop < lastScrollTop) {
          setScrollDirection("up");
        }
        setLastScrollTop(scrollTop);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollTop]);
  return (
    <OtherContext.Provider value={{ups:[up,setup],tabs:[tab,settab],scrolls:[scrollDirection,setScrollDirection,lastScrollTop]}}>
        {children}
    </OtherContext.Provider>
  )
}

export default Othercontext