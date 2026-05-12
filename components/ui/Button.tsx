'use client'

import { clsx } from 'clsx'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-[#111110] text-white hover:bg-[#2a2a28] active:scale-[0.98]': variant === 'primary',
            'border border-[#E5E5E3] text-[#111110] bg-white hover:bg-[#FAFAF9] active:scale-[0.98]': variant === 'outline',
            'text-[#6B6B6B] hover:text-[#111110] bg-transparent': variant === 'ghost',
          },
          {
            'text-sm px-4 py-2': size === 'sm',
            'text-sm px-5 py-2.5': size === 'md',
            'text-base px-6 py-3': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
