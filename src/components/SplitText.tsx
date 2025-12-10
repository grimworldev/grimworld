import React from 'react'
import { motion } from 'framer-motion'
interface SplitTextProps {
  children: string
  className?: string
  delay?: number
}
export function SplitText({
  children,
  className = '',
  delay = 0,
}: SplitTextProps) {
  const words = children.split(' ')
  return (
    <div className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="inline-block whitespace-nowrap mr-2 last:mr-0">
          {word.split('').map((char, j) => (
            <motion.span
              key={j}
              className="inline-block"
              initial={{
                y: '100%',
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
                delay: delay + i * 0.1 + j * 0.02,
              }}
              whileHover={{
                y: -5,
                rotate: Math.random() * 20 - 10,
                color: '#ff0000',
                transition: {
                  duration: 0.1,
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  )
}
