import React, { useEffect, useRef, useState } from 'react';

const Comp = ({ imgs }) => {
  const [drag, setDrag] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [startX, setStartX] = useState(0);
  const autoSlideRef = useRef(null);

  // Handle mouse down (start dragging)
  const handleMouseDown = (e) => {
    setDrag(true);
    setStartX(e.clientX);
    handlestop(); // Stop auto sliding when manual drag starts
  };

  // Handle mouse move (dragging)
  const handleMouseMove = (e) => {
    if (!drag) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imgs.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  // Handle mouse up (end dragging)
  const handleMouseUp = () => {
    if (!drag) return;
    setDrag(false);

    // Change image based on the drag distance
    if (translateX <= -100) {
      nextImage();
    } else if (translateX >= 100) {
      prevImage();
    }

    // Reset translateX after dragging
    setTranslateX(0);
    handlestart(); // Restart auto sliding after dragging ends
  };

  // Start auto sliding
  const handlestart = () => {
    handlestop(); // Clear any previous interval
    autoSlideRef.current = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds
  };

  // Stop auto sliding
  const handlestop = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  // Attach event listeners for mouse move and mouse up during drag
  useEffect(() => {
    if (drag) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [drag,translateX]); // Reattach listeners whenever drag changes

  // Start auto sliding when the component mounts
  useEffect(() => {
    handlestart();
    return () => handlestop(); // Cleanup interval on unmount
  }, [currentIndex]); // Restart sliding when currentIndex changes

  return (
    <div
      className='common'
      style={{
        cursor: drag ? 'grabbing' : 'pointer',
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className='commoncontainer'
        onDoubleClick={handlestop} // Stop auto sliding on double click
        style={{
          display: 'flex',
          transition: !drag ? 'transform 0.3s ease' : 'none', // Smooth transition when not dragging
          transform: `translateX(${-currentIndex * 100 + (translateX / window.innerWidth) * 100}vw)`,
        }}
      >
        {imgs.map((val, i) => (
          <img
            key={i}
            src={val}
            alt={`Slide ${i}`}
            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} // Full screen image size
          />
        ))}
      </div>

      {currentIndex!==0&&<button className='cb1' onClick={prevImage}>&#10094;</button>}
      {currentIndex!==imgs.length-1&&<button className='cb2' onClick={nextImage}>&#10095;</button>}
    </div>
  );
};

export default Comp;
