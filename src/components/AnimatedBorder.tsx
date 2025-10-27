import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function AnimatedBorder({ theme }: { theme: string }) {
  const [showAnimation, setShowAnimation] = useState(false);
  const borderColor = theme === 'dark' ? 'border-white' : 'border-gray-900';
  const gradientColor = theme === 'dark' ? 'white' : 'rgb(17, 24, 39)';

  useEffect(() => {
    // Start animation after spotlight fades (4 seconds)
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAnimation) {
    return <div aria-hidden="true" className={`absolute border border-solid ${borderColor} inset-0 transition-colors duration-500`} />;
  }

  return (
    <>
      {/* Static border */}
      <div aria-hidden="true" className={`absolute border border-solid ${borderColor} inset-0 transition-colors duration-500`} />
      
      {/* Animated overlay borders */}
      {/* Top edge - moving right */}
      <motion.div
        className="absolute top-0 left-0 h-[1px]"
        style={{ 
          width: '200px',
          background: `linear-gradient(to right, transparent, ${gradientColor}, transparent)`
        }}
        animate={{
          x: ['-200px', 'calc(100% + 200px)'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 0,
        }}
      />
      
      {/* Right edge - moving down */}
      <motion.div
        className="absolute top-0 right-0 w-[1px]"
        style={{ 
          height: '200px',
          background: `linear-gradient(to bottom, transparent, ${gradientColor}, transparent)`
        }}
        animate={{
          y: ['-200px', 'calc(100% + 200px)'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />
      
      {/* Bottom edge - moving left */}
      <motion.div
        className="absolute bottom-0 right-0 h-[1px]"
        style={{ 
          width: '200px',
          background: `linear-gradient(to left, transparent, ${gradientColor}, transparent)`
        }}
        animate={{
          x: ['200px', 'calc(-100% - 200px)'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />
      
      {/* Left edge - moving up */}
      <motion.div
        className="absolute bottom-0 left-0 w-[1px]"
        style={{ 
          height: '200px',
          background: `linear-gradient(to top, transparent, ${gradientColor}, transparent)`
        }}
        animate={{
          y: ['200px', 'calc(-100% - 200px)'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />
    </>
  );
}
