import {RefObject, useEffect} from 'react';

type Event = MouseEvent | TouchEvent

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void): void {

    useEffect(() => {
        function listener(event: Event) {
            if (document.contains(event.target as Node)
                && !ref.current?.contains((event.target as Node) || null)) {
                // && event.relatedTarget === null)
                handler(event);
            }
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}