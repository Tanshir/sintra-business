
// Security configuration constants
export const SECURITY_CONFIG = {
  // Form validation limits
  MAX_INPUT_LENGTH: {
    firstName: 50,
    lastName: 50,
    businessName: 100,
    email: 254,
    phone: 15
  },
  
  // Rate limiting
  RATE_LIMIT: {
    maxAttempts: 3,
    timeWindow: 60000 // 1 minute
  },
  
  // Data retention
  LOCAL_STORAGE: {
    maxLeads: 100,
    retentionDays: 30
  },
  
  // EmailJS security recommendations
  EMAILJS: {
    // These should be replaced with your actual EmailJS credentials
    serviceId: 'service_sintra',
    templateId: 'template_lead',
    publicKey: 'your_public_key',
    
    // Security notes:
    // 1. Enable domain restrictions in EmailJS dashboard
    // 2. Set up email templates to prevent injection
    // 3. Monitor usage to detect abuse
    // 4. Use CAPTCHA for additional protection if needed
  }
};

// Security checklist for deployment
export const SECURITY_CHECKLIST = [
  '✅ Content Security Policy implemented',
  '✅ Input sanitization added',
  '✅ Enhanced validation implemented',
  '✅ Rate limiting in place',
  '✅ Secure error handling',
  '⚠️ Replace EmailJS placeholder credentials',
  '⚠️ Test form submission in production',
  '⚠️ Monitor for suspicious activity',
  '⚠️ Add SSL certificate (HTTPS)',
  '⚠️ Configure hosting security headers'
];
