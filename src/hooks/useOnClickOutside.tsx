import * as React from 'react'

type Handler = (event?: MouseEvent) => void;

/**
     * @description This hook allows you to detect clicks outside of a specified element. This can be useful for closing a modal, a dropdown menu etc.
     * @param {string} ref - ref that we add to the element for which we want to detect outside clicks.
     * @param {*} handler - function to call on outside click.
     * @see https://usehooks.com/useOnClickOutside/
     */
function useOnClickOutside<T extends HTMLElement = HTMLElement> (
  ref: React.RefObject<T>,
  handler: Handler
) {
  React.useEffect(
    () => {
      const listener = (event: Event) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return
        }
        handler(event as unknown as MouseEvent)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    [ref, handler]
  )
}

export default useOnClickOutside
