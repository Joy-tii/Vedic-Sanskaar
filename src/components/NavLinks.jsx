'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const timeoutRef = useRef(null)

  // 🔗 Navigation items
  const links = [
    ['मूलधारा संस्कार', '/#features'],
    ['संस्कृति समीक्षा', '/#reviews'],
    ['सेवाएं व मूल्य', '/#pricing'],
    ['प्रश्नोत्तर', '/#faqs'],
  ]

  return links.map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={`
        relative -mx-3 -my-2 rounded-lg px-3 py-2 
        text-[15px] font-semibold tracking-wide
        text-[#1E293B] transition-all duration-300 
        hover:text-[#4285F4] focus:text-[#4285F4]
      `}
      onMouseEnter={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => setHoveredIndex(null), 200)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="
              absolute inset-0 rounded-lg
              bg-[#F4B400]/15 ring-1 ring-[#F4B400]/30
              backdrop-blur-[1px]
            "
            layoutId="hoverBackground"
            initial={{ opacity: 0, y: 2 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            exit={{
              opacity: 0,
              y: -2,
              transition: { duration: 0.15, ease: 'easeIn' },
            }}
          />
        )}
      </AnimatePresence>

      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
