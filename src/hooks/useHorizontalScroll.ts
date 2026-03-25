import { useRef, useEffect } from 'react'

const SCROLL_AMOUNT = 300
const AUTO_SCROLL_INTERVAL = 2000

export function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isPausedRef = useRef(false)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !isPausedRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0
        } else {
          scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })
        }
      }
    }, AUTO_SCROLL_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  return { scrollRef, isPausedRef, scroll }
}
