import { useState, useEffect } from "react";

/**
 *  Custom Hooks: useDebounce
 *
 *  Purpose:
 *  Delays updating a value until a specified time has passed.
 *  Perfect for search input to prevent too many API calls.
 */

function useDebounce<T>(value: T, delay: number): T {
  // Store the debounce value in state
  const [debouncedValue, setdebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebouncedValue(value);
    }, delay);

    // Cleanup: If the user types again Before the timer finishes, cancel the previous timer.
    return () => {
        clearTimeout(handler);
    };
  }, [value, delay]); 
  return debouncedValue;
}

export default useDebounce;
