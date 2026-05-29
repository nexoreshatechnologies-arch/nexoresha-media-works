"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

export default function MonkeyCursor() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isEaten, setIsEaten] = useState(false);
  const [isFacingLeft, setIsFacingLeft] = useState(false);
  const [showCrunch, setShowCrunch] = useState(false);
  const [crunchPos, setCrunchPos] = useState({ x: 0, y: 0 });

  // Mouse coordinate motion values
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  // Monkey targets (with offsets to not hover directly under the cursor pointer)
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  // Spring physics for smooth monkey movement
  const monkeyX = useSpring(targetX, { stiffness: 90, damping: 22 });
  const monkeyY = useSpring(targetY, { stiffness: 90, damping: 22 });

  // Spring physics for soft banana cursor trailing
  const bananaX = useSpring(rawMouseX, { stiffness: 800, damping: 45 });
  const bananaY = useSpring(rawMouseY, { stiffness: 800, damping: 45 });

  const facingLeftRef = useRef(false);
  const lastMouseXRef = useRef(0);

  // Setup desktop check and event listeners
  useEffect(() => {
    setMounted(true);

    const checkDevice = () => {
      // Disable on touch devices or screens smaller than 1024px
      const hasTouch = 
        window.matchMedia("(pointer: coarse)").matches || 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0);
      setIsDesktop(window.innerWidth >= 1024 && !hasTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleTouchStart = () => {
      setIsDesktop(false);
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      // Track direction to flip monkey face
      if (Math.abs(currentX - lastMouseXRef.current) > 3) {
        const isLeft = currentX < lastMouseXRef.current;
        if (isLeft !== facingLeftRef.current) {
          facingLeftRef.current = isLeft;
          setIsFacingLeft(isLeft);
        }
        lastMouseXRef.current = currentX;
      }

      // Update positions
      // If monkey faces left, it hangs to the right of cursor.
      // If monkey faces right, it hangs to the left of cursor.
      const offset = facingLeftRef.current ? 45 : -45;
      targetX.set(currentX + offset);
      targetY.set(currentY + 35);

      rawMouseX.set(currentX);
      rawMouseY.set(currentY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [targetX, targetY, rawMouseX, rawMouseY]);

  // Handle eyes blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 150);
    }, 4500);

    return () => clearInterval(blinkInterval);
  }, []);

  // Monitor distance between monkey and cursor to trigger "close" reaction
  useEffect(() => {
    if (!mounted) return;

    const unsubscribeX = monkeyX.on("change", (latestX) => {
      const latestY = monkeyY.get();
      const rx = rawMouseX.get();
      const ry = rawMouseY.get();
      const dx = rx - latestX;
      const dy = ry - latestY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const close = dist < 75;
      setIsClose((prev) => {
        if (prev !== close) return close;
        return prev;
      });
    });

    return () => {
      unsubscribeX();
    };
  }, [mounted, monkeyX, monkeyY, rawMouseX, rawMouseY]);

  // Handle window clicks: monkey does a flip and "eats" the banana
  useEffect(() => {
    const handleWindowClick = () => {
      if (isSpinning) return;

      setIsSpinning(true);
      setIsEaten(true);
      setCrunchPos({ x: rawMouseX.get(), y: rawMouseY.get() });
      setShowCrunch(true);

      setTimeout(() => {
        setIsSpinning(false);
      }, 600);

      setTimeout(() => {
        setShowCrunch(false);
      }, 850);

      setTimeout(() => {
        setIsEaten(false);
      }, 1300);
    };

    window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
  }, [isSpinning, rawMouseX, rawMouseY]);

  // Pupil eye tracking offsets (moves pupils towards the cursor position)
  const pupilX = useTransform(
    [rawMouseX, monkeyX, rawMouseY, monkeyY],
    (values: number[]) => {
      const [latestRawX, latestMonkeyX, latestRawY, latestMonkeyY] = values;
      const dx = latestRawX - latestMonkeyX;
      const dy = latestRawY - latestMonkeyY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist === 0) return 0;
      return (dx / dist) * Math.min(2.2, dist * 0.03);
    }
  );

  const pupilY = useTransform(
    [rawMouseX, monkeyX, rawMouseY, monkeyY],
    (values: number[]) => {
      const [latestRawX, latestMonkeyX, latestRawY, latestMonkeyY] = values;
      const dx = latestRawX - latestMonkeyX;
      const dy = latestRawY - latestMonkeyY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist === 0) return 0;
      return (dy / dist) * Math.min(2.2, dist * 0.03);
    }
  );

  // Soft tilt rotation towards cursor
  const tiltAngle = useTransform(
    [rawMouseX, monkeyX],
    (values: number[]) => {
      const [latestRawX, latestMonkeyX] = values;
      const dx = latestRawX - latestMonkeyX;
      // Cap at max 18 degrees rotation
      return Math.max(-18, Math.min(18, dx * 0.12));
    }
  );

  if (!mounted || !isDesktop) return null;

  return (
    <>
      {/* Banana Cursor Follower */}
      <motion.div
        style={{
          x: bananaX,
          y: bananaY,
          left: 10,
          top: 10,
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
        }}
        animate={{
          scale: isEaten ? 0 : 1,
          opacity: isEaten ? 0 : 1,
          rotate: isEaten ? -45 : [0, 8, -8, 0],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          },
          scale: { duration: 0.15 },
          opacity: { duration: 0.15 },
        }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
          {/* Banana body */}
          <path
            d="M6 26c4-1 11-4 15-9.5s7-11.5 6.5-13.5c-1.5.5-3.5 2-4.5 3.5S17 11.5 13 13.5s-9 2-11 1.5c1.5 1.5 4 4 6 5.5s3.5 3.5 4 5c.5 1.5 0 2.5-.5 3.5c2-1 4-2 4.5-3z"
            fill="#FFD23F"
          />
          {/* Curved inner highlight line */}
          <path
            d="M 23.5,6 C 21,9 18,12.5 13.5,14"
            stroke="#FFE79A"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Stem */}
          <path
            d="M 21.5,3 C 22,2 24,1 25.5,1 C 26,1.5 26,3 25,4.5 Z"
            fill="#5C4033"
          />
          {/* Tip */}
          <path
            d="M 3,25.5 C 3.5,26 4,26.5 4,27 C 3.5,27.5 2.5,27.5 2,27 Z"
            fill="#5C4033"
          />
        </svg>
      </motion.div>

      {/* NOM text effect */}
      <AnimatePresence>
        {showCrunch && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 10, rotate: -10 }}
            animate={{ opacity: 1, scale: 1.1, y: -25, rotate: 5 }}
            exit={{ opacity: 0, scale: 0.8, y: -45 }}
            style={{
              position: "fixed",
              left: crunchPos.x + 22,
              top: crunchPos.y + 5,
              color: "#8B0000",
              fontWeight: "bold",
              fontSize: "14px",
              pointerEvents: "none",
              zIndex: 999999,
              fontFamily: "var(--font-display), Impact, sans-serif",
              letterSpacing: "0.05em",
              textShadow: "1px 1px 0px #F9EEDC, -1px -1px 0px #F9EEDC, 1px -1px 0px #F9EEDC, -1px 1px 0px #F9EEDC",
            }}
          >
            NOM! 🍌
          </motion.div>
        )}
      </AnimatePresence>

      {/* Monkey Character Follower */}
      <motion.div
        style={{
          x: monkeyX,
          y: monkeyY,
          left: -40,
          top: -40,
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99998,
          scaleX: isFacingLeft ? -1 : 1,
        }}
        animate={isSpinning ? { rotate: 360 } : { rotate: tiltAngle.get() }}
        transition={
          isSpinning
            ? { duration: 0.6, ease: "easeInOut" }
            : { type: "spring", stiffness: 120, damping: 18 }
        }
      >
        <svg width="80" height="80" viewBox="0 0 100 100" className="overflow-visible">
          {/* Tail */}
          <motion.path
            d="M 32,70 Q 20,82 8,72 Q -3,61 6,46"
            fill="none"
            stroke="#7B4A21"
            strokeWidth="5.5"
            strokeLinecap="round"
            animate={{
              rotate: isClose ? [-12, 12, -12] : [-3, 5, -3],
            }}
            transition={{
              repeat: Infinity,
              duration: isClose ? 1.0 : 2.0,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "32px 70px" }}
          />

          {/* Feet */}
          <ellipse cx="38" cy="84" rx="7" ry="4" fill="#7B4A21" />
          <ellipse cx="62" cy="84" rx="7" ry="4" fill="#7B4A21" />
          <circle cx="38" cy="84" r="3" fill="#F4D3C6" />
          <circle cx="62" cy="84" r="3" fill="#F4D3C6" />

          {/* Arms */}
          {/* Left Arm */}
          <motion.path
            d="M 35,58 C 24,62 16,60 11,51"
            fill="none"
            stroke="#7B4A21"
            strokeWidth="6"
            strokeLinecap="round"
            animate={isClose ? { d: "M 35,58 C 20,53 14,38 12,28" } : { d: "M 35,58 C 24,62 16,60 11,51" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          />
          {/* Right Arm - Reaching out towards banana */}
          <motion.path
            d="M 65,58 C 76,62 84,60 89,51"
            fill="none"
            stroke="#7B4A21"
            strokeWidth="6"
            strokeLinecap="round"
            animate={isClose ? { d: "M 65,58 C 80,53 86,38 88,28" } : { d: "M 65,58 C 76,62 84,60 89,51" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          />

          {/* Main Body */}
          <ellipse cx="50" cy="65" rx="19" ry="21" fill="#7B4A21" />
          {/* Belly Patch */}
          <ellipse cx="50" cy="67" rx="12" ry="14" fill="#F4D3C6" />

          {/* Ears */}
          {/* Left Ear */}
          <circle cx="23" cy="36" r="10.5" fill="#7B4A21" />
          <circle cx="23" cy="36" r="6.5" fill="#F4D3C6" />
          {/* Right Ear */}
          <circle cx="77" cy="36" r="10.5" fill="#7B4A21" />
          <circle cx="77" cy="36" r="6.5" fill="#F4D3C6" />

          {/* Head */}
          <circle cx="50" cy="39" r="23" fill="#7B4A21" />

          {/* Face Mask Snout Area */}
          <circle cx="42" cy="39" r="12" fill="#F4D3C6" />
          <circle cx="58" cy="39" r="12" fill="#F4D3C6" />
          <ellipse cx="50" cy="48" rx="15" ry="10" fill="#F4D3C6" />

          {/* Left Eye */}
          <motion.ellipse
            cx="43"
            cy="35"
            rx="5.5"
            ry={isBlinking ? 0.5 : 5.5}
            fill={isBlinking ? "#7B4A21" : "#FFFFFF"}
          />
          {/* Right Eye */}
          <motion.ellipse
            cx="57"
            cy="35"
            rx="5.5"
            ry={isBlinking ? 0.5 : 5.5}
            fill={isBlinking ? "#7B4A21" : "#FFFFFF"}
          />

          {/* Pupils (Move with useTransform, hidden when blinking) */}
          {!isBlinking && (
            <>
              <motion.circle
                cx="43"
                cy="35"
                r="2.5"
                fill="#1E1E1E"
                style={{ x: pupilX, y: pupilY }}
              />
              <motion.circle
                cx="57"
                cy="35"
                r="2.5"
                fill="#1E1E1E"
                style={{ x: pupilX, y: pupilY }}
              />
            </>
          )}

          {/* Nose */}
          <polygon points="48.5,44.5 51.5,44.5 50,46.5" fill="#7B4A21" />

          {/* Mouth */}
          {isClose ? (
            // Open happy mouth
            <motion.path
              d="M 44.5,48.5 Q 50,54.5 55.5,48.5 Z"
              fill="#8B0000"
            />
          ) : (
            // Smile
            <path
              d="M 45,49.5 Q 50,53 55,49.5"
              fill="none"
              stroke="#7B4A21"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </motion.div>
    </>
  );
}
