import { useId } from 'react'
import clsx from 'clsx'

const baseInputStyles =
  'block w-full rounded-lg px-4 py-2 text-[#2D1F12] placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F39A43] transition-all duration-200'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  )
}

export function TextField({ label, type = 'text', className, ...props }) {
  let id = useId()

  return (
    <div>
      {label && <Label id={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        {...props}
        className={clsx(
          baseInputStyles,
          'bg-[#FFF3E6] focus:bg-white shadow-none border-none outline-none',
          className
        )}
      />
    </div>
  )
}

export function SelectField({ label, className, ...props }) {
  let id = useId()

  return (
    <div>
      {label && <Label id={id}>{label}</Label>}
      <select
        id={id}
        {...props}
        className={clsx(
          baseInputStyles,
          'bg-[#FFF3E6] pr-8 focus:bg-white shadow-none border-none outline-none',
          className
        )}
      />
    </div>
  )
}
