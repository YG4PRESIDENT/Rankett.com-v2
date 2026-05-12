'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'none'
  className?: string
}

export default function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 16 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
