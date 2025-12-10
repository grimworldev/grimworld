import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
export function CursorTrail() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = {
    damping: 25,
    stiffness: 700,
  }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY])
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-white mix-blend-difference pointer-events-none z-50 rounded-full"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <motion.div
        className="w-full h-full bg-white opacity-20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
    </motion.div>
  )
}
