import { useId } from 'react'
import clsx from 'clsx'

const baseInputStyles =
  'block w-full rounded-lg px-4 py-2 text-[#1E293B] placeholder:text-[#64748B] border border-[#E2E8F0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-colors duration-200 bg-[#FDF7F2] focus:bg-[#FFFFFF]'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-[#1E293B]"
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
        className={clsx(baseInputStyles, className)}
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
          'pr-8',
          className
        )}
      />
    </div>
  )
}
