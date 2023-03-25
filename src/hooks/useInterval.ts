/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useRef } from 'react'

export const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<Function | undefined>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const interval = setInterval(() => {
      if (savedCallback.current != null) {
        savedCallback.current()
      }
    }, delay)

    return () => { clearInterval(interval) }
  }, [delay])
}
