
import React, { useRef, useState, useEffect } from 'react';
import i2  from "../../public/wbg1.webp"
import i1  from "../../public/wbg2.webp"
import i3  from "../../public/wbg3.webp"
import i4  from "../../public/wbg4.webp"
import i5  from "../../public/wbg5.webp"
import i6  from "../../public/wbg6.webp"
import i7  from "../../public/wbg7.webp"
import i8  from "../../public/wbg8.webp"
import i9  from "../../public/wbg9.webp"
import i10 from "../../public/wbg10.webp"
import c2  from "../../public/c1.webp"
import c1  from "../../public/c2.webp"
import c3  from "../../public/c3.webp"
import c4  from "../../public/c4.webp"
import c5  from "../../public/c5.webp"
import c6  from "../../public/c6.webp"
import c7  from "../../public/c7.webp"
import c8  from "../../public/c8.webp"
import c9  from "../../public/c9.webp"
import c10 from "../../public/c10.webp"

const Component = () => {
  // State variables
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update width when the window resizes
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [currentImage, setCurrentImage] = useState(0);
  const images = windowWidth>700?[
    i1, 
    i2, 
    i3, 
    i4, 
    i5, 
    i6, 
    i7, 
    i8, 
    i9, 
    i10
  ]:[
    c1, 
    c2, 
    c3, 
    c4, 
    c5, 
    c6, 
    c7, 
    c8, 
    c9, 
    c10
  ]

  // Refs
  const autoSlideRef = useRef(null); // To store the interval ID

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  // Initialize auto-sliding
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage]);

  // Function to start auto-sliding
  const startAutoSlide = () => {
    stopAutoSlide(); // Clear any existing intervals
    autoSlideRef.current = setInterval(() => {
      goToNextImage();
    }, 3000); // Change image every 3 seconds
  };

  // Function to stop auto-sliding
  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  // Navigate to the next image
  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Navigate to the previous image
  const goToPrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  // Handle mouse down (start dragging)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoSlide(); // Stop auto-sliding on user interaction
  };

  // Handle mouse move (dragging)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const movement = currentX - startX;
    setTranslateX(movement);
  };

  // Handle mouse up (end dragging)
  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Determine if the drag was significant enough to change images
    if (translateX < -100) { // Dragged left
      goToNextImage();
    } else if (translateX > 100) { // Dragged right
      goToPrevImage();
    }

    // Reset translation
    setTranslateX(0);
  };

  // Attach global mouse event listeners during dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, translateX]);

  // Handle Previous Button Click
  const handlePrevClick = () => {
    goToPrevImage();
    stopAutoSlide(); // Stop auto-sliding on user interaction
  };

  // Handle Next Button Click
  const handleNextClick = () => {
    goToNextImage();
    stopAutoSlide(); // Stop auto-sliding on user interaction
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        cursor: isDragging ? 'grabbing' : 'pointer',
        userSelect: 'none',
      }}
    >
      {/* Image Container */}
      <div
      onDoubleClick={stopAutoSlide}
        style={{
          display: 'flex',
          transition: !isDragging ? 'transform 0.3s ease' : 'none',
          transform: `translateX(${-currentImage * 100 + (translateX / window.innerWidth) * 100}vw)`,
          // transform: `translateX(-100vw)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              pointerEvents: 'none',
              flexShrink: 0, 
            }}
          />
        ))}
      </div>

      {/* Previous Button */}
     {currentImage!==0&& <button
        onClick={handlePrevClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          zIndex: 2,
          backgroundColor: 'transparent',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        &#10094;
      </button>}


      {/* Next Button */}
{  currentImage!==9&&    <button
        onClick={handleNextClick}
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          zIndex: 2,
          backgroundColor: 'transparent',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
        }}
      >
         &#10095;
      </button>}
    </div>
  );
};

export default Component;

















// import React, { useRef, useState } from 'react'

// const Component = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [
//     'https://via.placeholder.com/600x300?text=Image+1',
//     'https://via.placeholder.com/600x300?text=Image+2',
//     'https://via.placeholder.com/600x300?text=Image+3',
//     'https://via.placeholder.com/600x300?text=Image+4',
//   ];

//   const sliderRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [translateX, setTranslateX] = useState(0);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.clientX);
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const currentX = e.clientX;
//       const movement = currentX - startX;
//       setTranslateX(movement);
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     if (translateX < -100) {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     } else if (translateX > 100) {
//       setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
//     }
//     setTranslateX(0);
//   };

//   return (
//     <div
//       ref={sliderRef}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//       style={{
//         width: '600px',
//         height: '300px',
//         overflow: 'hidden',
//         position: 'relative',
//         cursor: isDragging ? 'pointer' : 'pointer',
//         userSelect: 'none',
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           transition: !isDragging ? 'transform 0.3s ease' : 'none',
//           transform: `translateX(${-currentImage * 600 + translateX}px)`, 
//         }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             style={{
//               width: '600px',
//               height: '300px',
//               objectFit: 'cover',
//               pointerEvents: 'none',
//             }}
//           />
//         ))}
//       </div>


//     </div>
//   );
// };


// export default Component








// import React, { useEffect, useState } from 'react'

// const Component = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 }); // Initial position of the box
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [det,setdet]=useState({x:0,y:0})

//   // Handle mousedown (start dragging)
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     // Calculate the offset between the box position and where the mouse clicked
//     setOffset({
//       x: e.clientX - boxPosition.x,
//       y: e.clientY - boxPosition.y,
//     });
//     e.preventDefault()
//   };

//   // Handle mousemove (move the box)
//   const handleMouseMove = (e) => {
//     setdet({x:e.clientX,y:e.clientY})
//     if (isDragging) {
//       // Update the box's position while dragging
//       setMousePosition({
//         x: e.clientX - offset.x,
//         y: e.clientY - offset.y,
//       });
//       setBoxPosition(mousePosition)
//     }
    
//   };

//   // Handle mouseup (stop dragging)
//   const handleMouseUp = () => {
//     if (isDragging) {
//       setIsDragging(false);
//     }
//   };

//   // Add and clean up mouse event listeners
//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging, mousePosition, offset]);

//   return (
//     <>
//       <div style={{position:"fixed",zIndex:"99",top:"410px"}}>
//         X: {boxPosition.x}, Y: {boxPosition.y} :: x:{det.x},y:{det.y}
//       </div>
//       <div
//         style={{
//           width: '100vw',
//           height: '100vh',
//           // backgroundColor: 'blue',
//           position: 'fixed',
//           top: `${boxPosition.y}px`,
//           left: `${boxPosition.x}px`,
//           cursor: isDragging ? 'grabbing' : 'grab',
//           userSelect: 'none', 
//         }}
//         onMouseDown={handleMouseDown}
//       >
        
//       </div>
//     </>
//   );
// };



// export default Component