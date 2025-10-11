import Link from 'next/link'
import clsx from 'clsx'

/* 🟩 Base Button Style */
const baseStyles = {
  solid:
    'inline-flex justify-center items-center rounded-lg py-2.5 px-6 text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'inline-flex justify-center items-center rounded-lg border-2 py-2.5 px-6 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0',
}

/* 🎨 Variant Styles (Old + New Palette Combined)
   New Colors → Based on your color table:
   Primary: #4285F4 | Secondary: #F4B400 | Background: #FDF7F2
   Surface: #FFFFFF | Text Primary: #1E293B | Text Secondary: #64748B | Border: #E2E8F0
*/
const variantStyles = {
  solid: {
    // 🟡 Old Theme Buttons
    cream:
      'bg-[#fff] text-[#A55F12] hover:bg-[#FDD2A1] hover:text-[#703C0D] active:bg-[#FBC17D] focus:ring-[#FDD2A1]/50',
    gold:
      'bg-[#C6A15A] text-[#2D1F12] hover:bg-[#B08943] active:bg-[#9C7A36] focus:ring-[#C6A15A]/50',
    dark:
      'bg-[#2D1F12] text-[#FDD2A1] hover:bg-[#4B321C] active:bg-[#3B260F] focus:ring-[#C6A15A]/40',

    // 🟦 New Theme Buttons
    primary:
      'bg-[#4285F4] text-white hover:bg-[#3a75d6] active:bg-[#2e5ea8] focus:ring-[#4285F4]/50',
    secondary:
      'bg-[#F4B400] text-[#1E293B] hover:bg-[#e0a800] active:bg-[#c99600] focus:ring-[#F4B400]/40',
    neutral:
      'bg-[#FDF7F2] text-[#1E293B] hover:bg-[#f5efe9] active:bg-[#e9e0d8] focus:ring-[#E2E8F0]/30',
  },
  outline: {
    // 🟡 Old Theme Buttons
    cream:
      'border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-[#A55F12] active:bg-[#FDD2A1] focus:ring-[#fff]/30',
    gold:
      'border-[#C6A15A] text-[#C6A15A] hover:bg-[#C6A15A] hover:text-[#2D1F12] active:bg-[#B08943] focus:ring-[#C6A15A]/40',
    dark:
      'border-[#2D1F12] text-[#2D1F12] hover:bg-[#2D1F12] hover:text-[#FDD2A1] active:bg-[#4B321C] focus:ring-[#2D1F12]/30',

    // 🟦 New Theme Outlines
    primary:
      'border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4] hover:text-white active:bg-[#3367d6] focus:ring-[#4285F4]/30',
    secondary:
      'border-[#F4B400] text-[#F4B400] hover:bg-[#F4B400] hover:text-[#1E293B] active:bg-[#e0a800] focus:ring-[#F4B400]/30',
    neutral:
      'border-[#E2E8F0] text-[#1E293B] hover:bg-[#FDF7F2] active:bg-[#f5efe9] focus:ring-[#E2E8F0]/30',
  },
}

/* 🧩 Final Button Component */
export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'cream' // default from old theme

  className = clsx(
    baseStyles[props.variant],
    variantStyles[props.variant][props.color],
    className
  )

  // 🖱️ Link or Button
  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
