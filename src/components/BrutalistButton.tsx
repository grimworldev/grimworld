import React from 'react'
import { motion } from 'framer-motion'
import { Magnetic } from './Magnetic'
interface BrutalistButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}
export function BrutalistButton({
  children,
  onClick,
  className = '',
  type = 'button',
}: BrutalistButtonProps) {
  return (
    <Magnetic strength={30}>
      <motion.button
        type={type}
        onClick={onClick}
        className={`relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider border-2 border-transparent hover:border-white hover:bg-black hover:text-white transition-colors duration-300 ${className}`}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-red-600 z-0"
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
          style={{
            originX: 0,
          }}
        />
      </motion.button>
    </Magnetic>
  )
}
