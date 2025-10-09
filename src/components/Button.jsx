import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center items-center rounded-lg py-2.5 px-6 text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2',
  outline:
    'inline-flex justify-center items-center rounded-lg border-2 py-2.5 px-6 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
}

const variantStyles = {
  solid: {
    cream:
      'bg-[#fff] text-[#A55F12] hover:bg-[#FDD2A1] hover:text-[#703C0D] active:bg-[#FBC17D] focus:ring-[#FDD2A1]/50',
    gold:
      'bg-[#C6A15A] text-[#2D1F12] hover:bg-[#B08943] active:bg-[#9C7A36] focus:ring-[#C6A15A]/50',
    dark:
      'bg-[#2D1F12] text-[#FDD2A1] hover:bg-[#4B321C] active:bg-[#3B260F] focus:ring-[#C6A15A]/40',
  },
  outline: {
    cream:
      'border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-[#A55F12] active:bg-[#FDD2A1] focus:ring-[#fff]/30',
    gold:
      'border-[#C6A15A] text-[#C6A15A] hover:bg-[#C6A15A] hover:text-[#2D1F12] active:bg-[#B08943] focus:ring-[#C6A15A]/40',
    dark:
      'border-[#2D1F12] text-[#2D1F12] hover:bg-[#2D1F12] hover:text-[#FDD2A1] active:bg-[#4B321C] focus:ring-[#2D1F12]/30',
  },
}

export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'cream'

  className = clsx(
    baseStyles[props.variant],
    variantStyles[props.variant][props.color],
    className
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}

