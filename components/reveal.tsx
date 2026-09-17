"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealDirection = "up" | "left" | "right" | "none"

const directionOffsets: Record<RevealDirection, string> = {
  up: "translate-y-6",
  left: "-translate-x-6",
  right: "translate-x-6",
  none: "",
}

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in ms, applied once the element enters the viewport. */
  delay?: number
  direction?: RevealDirection
}

/**
 * Fades and slides content into place the first time it scrolls into view.
 * Uses transitions (not keyframes) so `motion-reduce:transition-none` can
 * disable the animation for users who prefer reduced motion, while content
 * still becomes visible as soon as it intersects.
 */
export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
        visible ? "opacity-100 translate-x-0 translate-y-0" : cn("opacity-0", directionOffsets[direction]),
        className,
      )}
      style={visible && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
