import React, { useState, useEffect, useContext } from 'react';
import img from "../../public/w-logo.avif"; 
import { OtherContext } from './Othercontext';

const Nav = () => {
  const initialPlaceholder = 'Search'; 
  const typingSpeed = 100; 
  const pauseDuration = 1000; 
  const typingOptions = ["Ethnic Dresses", "Makeup Remover", "Home Fragrance", "Footwear", "Trending Now"]; 
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);
  const [isFocused, setIsFocused] = useState(false);
  const [typingText, setTypingText] = useState(typingOptions[0]); 
  const [typingIndex, setTypingIndex] = useState(0);
  const {ups,scrolls,tabs}=useContext(OtherContext)
  const [up,setup]=ups
  const [tab,settab]=tabs
  const [open,setopen]=useState(false)
  const [scrollDirection,setScrollDirection,lastScrollTop]=scrolls
  useEffect(() => {
    let timeoutId;

    if (!isFocused) {
      if (placeholder === initialPlaceholder) {
        // Start typing after a short delay
        timeoutId = setTimeout(() => {
          setPlaceholder(''); // Clear to start typing
        }, pauseDuration);
      } else if (typingIndex < typingText.length) {
        // Type the next character
        timeoutId = setTimeout(() => {
          setPlaceholder((prev) => prev + typingText.charAt(typingIndex));
          setTypingIndex((prevIndex) => prevIndex + 1);
        }, typingSpeed);
      } else {
        // After typing the entire text, reset after a pause and choose a new text
        timeoutId = setTimeout(() => {
          setPlaceholder(initialPlaceholder);
          setTypingIndex(0);

          // Randomly select a new text from the array
          const randomText = typingOptions[Math.floor(Math.random() * typingOptions.length)];
          setTypingText(randomText); // Update typingText state
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeoutId); // Cleanup on unmount or state change
  }, [isFocused, placeholder, typingIndex, typingText, typingSpeed, pauseDuration, typingOptions, initialPlaceholder]);

  const handleFocus = () => {
    setIsFocused(true);
    setPlaceholder(''); 
    setTypingIndex(0); 
  };

  const handleBlur = () => {
    setIsFocused(false); 
  };

  return (
      <div className={`navb ${scrollDirection=="down"?"navup":"navdown"} ${tab&&"fixed"}`} style={{backgroundColor:up||lastScrollTop!==0?"white":"transparent"}}>
        <div className='logo'>
          <img src={img} alt="Logo" />
        </div>
        <div className='searchbar'>
          <div className='ii'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder={isFocused ? '' : placeholder}
              onFocus={handleFocus}
              onBlur={handleBlur}
     
            />
          </div>
        </div>
        <div className='hcs'>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Sign in</p>
        </div>
        <div className={`hamburgar ${open?"hamc":"hamr"}`} onClick={()=>{setopen(!open)
          settab(!tab)
        }}>
            <p  className='li1' ></p>
            <p className='li2'></p>
            <p className='li3'></p>
        </div>
      </div>
   
  );
};

export default Nav;