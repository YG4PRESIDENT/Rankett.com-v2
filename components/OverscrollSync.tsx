'use client'
import { useEffect } from 'react'

// Swaps html background-color so the overscroll bounce canvas matches the edge
// being revealed: lavender at the top, dark navy at the bottom.
export default function OverscrollSync() {
  useEffect(() => {
    const html = document.documentElement
    const FOOTER_COLOR = '#0a0f30'
    const TOP_COLOR    = '#C5D5FF'

    const sync = () => {
      const nearBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 120
      html.style.backgroundColor = nearBottom ? FOOTER_COLOR : TOP_COLOR
    }

    window.addEventListener('scroll', sync, { passive: true })
    sync()
    return () => window.removeEventListener('scroll', sync)
  }, [])

  return null
}
