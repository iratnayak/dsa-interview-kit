/**
 * Problem: Rate Limiter (Token Bucket Algorithm)
 * Description: Simulate an API rate limiter that allows a specific number of requests per second.
 * Use Case: Preventing DDoS attacks and API abuse.
 */

class RateLimiter {
    private capacity: number;       // Max tokens the bucket can hold
    private tokens: number;         // Current tokens available
    private refillRate: number;     // Tokens added per second
    private lastRefill: number;     // Timestamp of the last refill

    constructor(capacity: number, refillRate: number) {
        this.capacity = capacity;
        this.refillRate = refillRate;
        this.tokens = capacity;
        this.lastRefill = Date.now();
    }

    // Private method to refill tokens based on time elapsed
    private refill() {
        const now = Date.now();
        const elapsedSeconds = (now - this.lastRefill) / 1000;

        if (elapsedSeconds > 0) {
            const tokensToAdd = elapsedSeconds * this.refillRate;
            this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
            this.lastRefill = now;
        }
    }

    // Public method to check if a request is allowed
    public allowRequest(tokensNeeded: number = 1): boolean {
        this.refill();

        if (this.tokens >= tokensNeeded) {
            this.tokens -= tokensNeeded;
            console.log(`✅ Request Allowed. Tokens remaining: ${this.tokens.toFixed(2)}`);
            return true;
        } else {
            console.log(`❌ Request Blocked. Not enough tokens.`);
            return false;
        }
    } 
}

// --- Testing the Logic ---
console.log("--- Starting Rate Limiter Simulation ---");

// Allow 5 requests max, refill 1 token every second
const apiLimiter = new RateLimiter(5, 1);

apiLimiter.allowRequest(); // 1
apiLimiter.allowRequest(); // 2
apiLimiter.allowRequest(); // 3
apiLimiter.allowRequest(); // 4
apiLimiter.allowRequest(); // 5
apiLimiter.allowRequest(); // 6 (Should Block)

// Wait for 2 seconds and try again
setTimeout(() => {
    console.log("\n--- After 2 Seconds ---");
    apiLimiter.allowRequest(); // Should Allow again
    
}, 2000);
