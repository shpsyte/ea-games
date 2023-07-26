import Toast from 'awesome-toast-component'

type NotifyProps = {
  message: string
  type?: 'success' | 'error'
}

export default function notify({ message, type = 'success' }: NotifyProps) {
  const style =
    type === 'error'
      ? {
          container: [['background-color', 'red']],
          message: [['color', '#eee']],
          bold: [['font-weight', 'bold']],
        }
      : {}

  return new Toast(`${message}`, {
    position: 'top',
    style,
    timeout: 2000,
  })
}
