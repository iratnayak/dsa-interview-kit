import { useState, useEffect } from "react";

/**
 * 🎣 Custom Hook: useDebounce
 *
 * Purpose:
 * - Delays updating a value until a specified time has passed.
 * - Perfect for Search Inputs to prevent too many API calls.
 */

function useDebounce<T>(value: T, delay: number): T {
  // 1. Store the debounced value in state
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // 2. Set a timer to update the value after (delay) milliseconds
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 3. Cleanup: If the user types again BEFORE the timer finishes, cancel the previous timer.
    // (This is the magic part!)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run if value or delay changes

  return debouncedValue;
}

export default useDebounce;

// --- Example Usage Comment ---
// const searchTerm = useDebounce(inputValue, 500);
// useEffect(() => { searchAPI(searchTerm) }, [searchTerm]);