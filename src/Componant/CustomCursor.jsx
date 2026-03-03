
import { useEffect, useRef, useState } from "react";

export default function ModernCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const animateFollower = () => {
      const easing = 0.12;

      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * easing;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * easing;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      requestAnimationFrame(animateFollower);
    };

    const rafId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
   
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      />

     
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 bg-white/5 rounded-full pointer-events-none z-9998 mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out scale-100"
        style={{
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)"
        }}
      />

      <style>{`
        body {
          cursor: none !important;
        }
        a, button, input, textarea, [role='button'] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
