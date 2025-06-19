
import DOMPurify from 'dompurify';

// Input sanitization utility
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input.trim(), { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
};

// Enhanced email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Enhanced phone validation for Australian numbers
export const validateAustralianPhone = (phone: string): boolean => {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Check if it's a valid Australian mobile or landline format
  const mobileRegex = /^\+614\d{8}$/; // +61 4XX XXX XXX
  const landlineRegex = /^\+61[2-8]\d{8}$/; // +61 2/3/7/8 XXXX XXXX
  
  return mobileRegex.test(cleaned) || landlineRegex.test(cleaned);
};

// Secure error message generation
export const getSecureErrorMessage = (error: unknown): string => {
  // Don't expose internal error details to users
  if (error instanceof Error) {
    // Log the full error for debugging (will be visible in console)
    console.error('Form submission error:', error);
    
    // Return generic user-friendly message
    return 'We encountered an issue processing your request. Please try again or contact support if the problem persists.';
  }
  
  return 'An unexpected error occurred. Please try again.';
};

// Rate limiting for form submissions
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts = 3;
  private readonly timeWindow = 60000; // 1 minute

  canSubmit(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the time window
    const recentAttempts = userAttempts.filter(time => now - time < this.timeWindow);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Add current attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }
}

export const formRateLimiter = new RateLimiter();
