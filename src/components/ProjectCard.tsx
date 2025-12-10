import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Magnetic } from './Magnetic'
interface ProjectCardProps {
  title: string
  category: string
  index: number
}
export function ProjectCard({ title, category, index }: ProjectCardProps) {
  return (
    <Magnetic strength={100}>
      <motion.div
        className="group relative h-96 w-full bg-neutral-900 border-2 border-neutral-800 overflow-hidden cursor-pointer"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: index * 0.1,
        }}
        whileHover={{
          scale: 0.98,
        }}
      >
        {/* Animated Background Grid */}
        <div
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            backgroundImage:
              'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Content Container */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
          <div className="flex justify-between items-start">
            <span className="font-mono text-sm text-neutral-500">
              0{index + 1}
            </span>
            <motion.div
              whileHover={{
                rotate: 45,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
            >
              <ArrowUpRight className="w-8 h-8 text-white" />
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="text-4xl font-bold text-white mb-2 uppercase"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
              }}
            >
              <motion.span
                className="block"
                initial={{
                  y: '100%',
                }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                {title}
              </motion.span>
            </motion.h3>
            <p className="font-mono text-neutral-400 group-hover:text-red-500 transition-colors duration-300">
              {category}
            </p>
          </div>
        </div>

        {/* Hover Reveal Overlay */}
        <motion.div
          className="absolute inset-0 bg-white mix-blend-difference pointer-events-none"
          initial={{
            scaleY: 0,
          }}
          whileHover={{
            scaleY: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          style={{
            originY: 1,
          }}
        />
      </motion.div>
    </Magnetic>
  )
}
