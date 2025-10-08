import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors',
}

const variantStyles = {
  solid: {
    cyan: 'bg-[#F39A43] text-[#FDD2A1] hover:bg-[#C67117] active:bg-[#A55F12]',
    gray: 'bg-[#2D1F12] text-[#FDD2A1] hover:bg-[#4B321C] active:bg-[#3B260F]',
    amber: 'bg-[#C6A15A] text-[#2D1F12] hover:bg-[#A57C23] active:bg-[#846519]',
  },
  outline: {
    gray: 'border-[#987A3D] text-[#834C13] hover:border-[#C6A15A] active:bg-[#FDD2A1] active:text-[#834C13]/80',
  },
}


export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
