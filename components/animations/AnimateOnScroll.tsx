"use client"

import React, { ReactNode } from "react"
import { useScrollAnimation, AnimationType } from "@/hooks/useScrollAnimation"
import styles from "./AnimateOnScroll.module.css"

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: AnimationType
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
  duration?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export default function AnimateOnScroll({
  children,
  animation = "fade-in",
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  delay = 0,
  duration = 0.6,
  className = "",
  as: Component = "div",
}: AnimateOnScrollProps) {
  const { ref, isVisible, animationType, delay: animDelay, duration: animDuration } = useScrollAnimation(
    animation,
    {
      threshold,
      rootMargin,
      triggerOnce,
      delay,
      duration,
    }
  )

  const combinedClassName = [
    styles.animateOnScroll,
    styles[animationType],
    isVisible ? styles.visible : styles.hidden,
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const style = {
    "--animation-delay": `${animDelay}s`,
    "--animation-duration": `${animDuration}s`,
  } as React.CSSProperties

  // Create a component that forwards the ref properly
  const ComponentWithRef = Component as any

  return (
    <ComponentWithRef ref={ref} className={combinedClassName} style={style}>
      {children}
    </ComponentWithRef>
  )
}
