import { ComponentProps, ComponentPropsWithRef } from 'react'

import clsxm from '@/lib/clsx'

type ButtonProps = {
  className?: string
} & ComponentProps<'button'>

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsxm(
        'flex items-center justify-center rounded-lg bg-gray-700 px-4 text-[#fff] shadow-lg hover:bg-gray-800 ',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
