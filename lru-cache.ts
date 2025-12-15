/**
 * Problem: LRU Cache (Least Recently Used)
 * Description: A cache that removes the least recently used item when full.
 * Use Case: Browser History, CPU Caches.
 * Time Complexity: O(1) using JavaScript Map.
 */

class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  // Get items mark as "recently used"
  get(key: K): V | -1 {
    if (!this.cache.has(key)) return -1;

    // Move to end (mark as most recently used)
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);

    console.log(`Accessed successful: ${key}`);
    return value;
  }

  // Add item (Evict it full)
  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key); // Update exiting
    } else if (this.cache.size >= this.capacity) {
      // Remove first item (last recently used)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey!);
      console.log(`Evicted Removed: ${firstKey}`);
    }
    this.cache.set(key, value);
    console.log(`Added: ${key} -> ${value}`);
  }
  printCache() {
    console.log(`Current Cache Status:`, Array.from(this.cache.entries()));
  }
}

// Testing
console.log("---- Starting LRU cache simulation ----");
const lru = new LRUCache<string, number>(3);

lru.put("A", 1);
lru.put("B", 2);
lru.put("C", 3); // Cache is full [A, B, C]

lru.get("A"); // Access A. Now A is most recent. order [B, C, A]

console.log("\n --- Adding D (Should remove B) ---");

lru.put("D", 4); // B is least recent, so B goes out.

lru.printCache();
