import { ComponentPropsWithRef, forwardRef } from 'react'

import clsxm from '@/lib/clsx'

type InputProps = {
  className?: string
} & ComponentPropsWithRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <input
        className={clsxm(
          'w-full rounded-sm bg-primary p-2 text-white outline-none transition-colors duration-200 ease-in-out hover:bg-gray-800',
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </input>
    )
  }
)

export default Input
