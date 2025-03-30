"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  // Default to false on server, true if we're matching mobile
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)

      // Set initial value
      setMatches(media.matches)

      // Define a callback function to handle changes
      const listener = (e: MediaQueryListEvent) => {
        setMatches(e.matches)
      }

      // Add the callback as a listener for changes to the media query
      if (media.addEventListener) {
        media.addEventListener("change", listener)
      } else {
        // Fallback for older browsers
        media.addListener(listener)
      }

      // Clean up
      return () => {
        if (media.removeEventListener) {
          media.removeEventListener("change", listener)
        } else {
          // Fallback for older browsers
          media.removeListener(listener)
        }
      }
    }

    // For mobile-first approach, default to true if query is for small screens
    return () => {
      if (query.includes("max-width") && query.includes("768px")) {
        setMatches(true)
      }
    }
  }, [query])

  return matches
}

