'use client'
import { useEffect } from 'react'

const DOT = 'radial-gradient(circle, rgba(100, 128, 255, 0.065) 1px, transparent 1px)'

export default function OverscrollSync() {
  useEffect(() => {
    const html = document.documentElement
    let dark = false

    const gutter = () =>
      document.getElementById('rankett-gutter-dark') as HTMLElement | null

    const setDark = () => {
      html.style.backgroundColor      = '#0a0f30'
      html.style.backgroundImage      = 'none'
      html.style.backgroundSize       = ''
      html.style.backgroundAttachment = ''
      const g = gutter()
      if (g) g.style.opacity = '1'
      dark = true
    }

    const setLight = () => {
      html.style.backgroundColor      = '#EEF3FF'
      html.style.backgroundImage      = DOT
      html.style.backgroundSize       = '28px 28px'
      html.style.backgroundAttachment = 'fixed'
      const g = gutter()
      if (g) g.style.opacity = '0'
      dark = false
    }

    const sync = () => {
      const max = document.body.scrollHeight - window.innerHeight
      if (max <= 0) return          // page not scrollable — leave alone
      if (!dark && window.scrollY >= max - 30)  setDark()
      if ( dark && window.scrollY <  max - 200) setLight()
    }

    window.addEventListener('scroll', sync, { passive: true })
    setLight()
    return () => window.removeEventListener('scroll', sync)
  }, [])

  return null
}
